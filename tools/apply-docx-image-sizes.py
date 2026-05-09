#!/usr/bin/env python3
"""Inject image dimensions (and crop info) from a .docx into a Pandoc-converted manual.md.

Usage:
    python3 tools/apply-docx-image-sizes.py \\
        --docx 'frontend/src/assets/support/WIO Symphony user manual ...docx' \\
        --md   frontend/src/assets/support/en/manual.md \\
        [--dpi 96] [--dry-run]

What it does:

1. Walks every <w:drawing> in the docx in document order. For each, it pulls
   the <wp:extent cx cy> (size in EMUs), the embedded image's filename, and
   any <a:srcRect l r t b> crop percentages.

2. Walks image references in the markdown in document order — both plain
   markdown `![alt](src)` and existing `<img ...>` HTML tags. Pairs each
   with the corresponding drawing.

3. Replaces every reference with a normalized `<img alt src width height>`
   tag. EMUs convert to CSS pixels at the chosen DPI (default 96 px/inch).

4. If the drawing has a srcRect crop, it derives a deterministic cropped
   filename (`imageN-c<8hash>.ext`) and emits that as the src. The actual
   pixel cropping is performed by `crop-images.js` using the manifest this
   script writes (default: <md>.crops.json next to the markdown).

The script is idempotent: re-running on already-rewritten markdown produces
identical output. Re-extracting from a fresh Pandoc conversion also works.
"""

import argparse
import hashlib
import html
import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

NS = {
    'w':  'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a':  'http://schemas.openxmlformats.org/drawingml/2006/main',
    'r':  'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'pr': 'http://schemas.openxmlformats.org/package/2006/relationships',
}

EMU_PER_INCH = 914400


def crop_hash(crop):
    """8-char fingerprint of a crop tuple — stable across runs."""
    s = f"{crop['l']},{crop['r']},{crop['t']},{crop['b']}"
    return hashlib.sha1(s.encode()).hexdigest()[:8]


def cropped_filename(original, crop):
    """imageN.JPG + crop -> imageN-c<8hash>.JPG"""
    if '.' in original:
        stem, ext = original.rsplit('.', 1)
    else:
        stem, ext = original, ''
    h = crop_hash(crop)
    return f"{stem}-c{h}.{ext}" if ext else f"{stem}-c{h}"


def extract_drawings(docx_path):
    """Return [{'file', 'cx_emu', 'cy_emu', 'crop' or None}] in document order."""
    with zipfile.ZipFile(docx_path) as z:
        rels_xml = z.read('word/_rels/document.xml.rels')
        doc_xml  = z.read('word/document.xml')

    rels = ET.fromstring(rels_xml)
    rid_to_file = {
        r.get('Id'): r.get('Target').split('/')[-1]
        for r in rels.findall('pr:Relationship', NS)
        if 'image' in (r.get('Type') or '')
    }

    doc = ET.fromstring(doc_xml)
    out = []
    for d in doc.iter(f'{{{NS["w"]}}}drawing'):
        ex = d.find('.//wp:extent', NS)
        bl = d.find('.//a:blip', NS)
        if ex is None or bl is None:
            continue
        rid = bl.get(f'{{{NS["r"]}}}embed')
        fn = rid_to_file.get(rid)
        if not fn:
            continue
        sr = d.find('.//a:srcRect', NS)
        crop = None
        if sr is not None:
            # Word stores crop as percentage in 1/100000ths. Negative values
            # exist (e.g. l="-1") for sub-pixel rounding; clamp to 0.
            l = max(0, int(sr.get('l') or 0))
            r = max(0, int(sr.get('r') or 0))
            t = max(0, int(sr.get('t') or 0))
            b = max(0, int(sr.get('b') or 0))
            if l or r or t or b:
                crop = {'l': l, 'r': r, 't': t, 'b': b}
        out.append({
            'file': fn,
            'cx_emu': int(ex.get('cx')),
            'cy_emu': int(ex.get('cy')),
            'crop': crop,
        })
    return out


# Match `![alt](src)` (alt may span lines, src is single-line)
MD_IMG_RE = re.compile(r'!\[(?P<alt>(?:[^\]\\]|\\.)*?)\]\((?P<src>\S+?)\)', re.DOTALL)
# Match `<img ...>` self-closing or open tag
HTML_IMG_RE = re.compile(r'<img\b[^>]*?>', re.DOTALL)


def find_image_refs(md):
    """Return list of (start, end, alt, src) tuples in document order."""
    refs = []
    for m in MD_IMG_RE.finditer(md):
        refs.append((m.start(), m.end(), m.group('alt'), m.group('src')))
    for m in HTML_IMG_RE.finditer(md):
        tag = m.group(0)
        alt_m = re.search(r'\balt="([^"]*)"', tag) or re.search(r"\balt='([^']*)'", tag)
        src_m = re.search(r'\bsrc="([^"]+)"', tag) or re.search(r"\bsrc='([^']+)'", tag)
        if not src_m:
            continue
        refs.append((m.start(), m.end(), alt_m.group(1) if alt_m else '', src_m.group(1)))
    refs.sort()
    return refs


def rewrite(md, drawings, dpi, media_path_prefix):
    refs = find_image_refs(md)
    if len(refs) != len(drawings):
        raise SystemExit(
            f'image-count mismatch: md has {len(refs)} refs, docx has {len(drawings)} drawings.\n'
            'Order alignment will be wrong; aborting.'
        )

    crop_jobs = {}     # dst_filename -> {'src_filename', 'crop'}
    pieces = []
    last = 0
    svg_fallbacks = 0
    mismatches = []

    for (start, end, alt, src), drawing in zip(refs, drawings):
        md_basename = src.rsplit('/', 1)[-1]
        doc_basename = drawing['file']
        if md_basename != doc_basename:
            md_ext  = md_basename.rsplit('.', 1)[-1].lower() if '.' in md_basename else ''
            doc_ext = doc_basename.rsplit('.', 1)[-1].lower() if '.' in doc_basename else ''
            if {md_ext, doc_ext} == {'svg', 'png'}:
                svg_fallbacks += 1
            else:
                mismatches.append((md_basename, doc_basename))

        w_px = max(1, round(drawing['cx_emu'] / EMU_PER_INCH * dpi))
        h_px = max(1, round(drawing['cy_emu'] / EMU_PER_INCH * dpi))

        if drawing['crop'] is not None:
            cropped_name = cropped_filename(md_basename, drawing['crop'])
            new_src = src.rsplit('/', 1)[0] + '/' + cropped_name if '/' in src else cropped_name
            crop_jobs.setdefault(cropped_name, {
                'src_filename': md_basename,
                'src_path':     media_path_prefix + md_basename,
                'dst_path':     media_path_prefix + cropped_name,
                'crop':         drawing['crop'],
            })
        else:
            new_src = src

        # Collapse multi-line alt text into one line, escape for HTML.
        alt_clean = re.sub(r'\s+', ' ', alt).strip()
        alt_attr  = html.escape(alt_clean, quote=True)
        tag = f'<img alt="{alt_attr}" src="{new_src}" width="{w_px}" height="{h_px}">'

        pieces.append(md[last:start])
        pieces.append(tag)
        last = end

    pieces.append(md[last:])

    if svg_fallbacks:
        sys.stderr.write(f'note: {svg_fallbacks} svg/png fallback pairs (expected, dimensions identical)\n')
    if mismatches:
        sys.stderr.write(
            f'warning: {len(mismatches)} unexpected filename mismatches — '
            f'first few: {mismatches[:3]}\n'
        )

    return ''.join(pieces), list(crop_jobs.values())


def derive_media_prefix(md_path: Path) -> str:
    """`.../support/en/manual.md` -> `.../support/en/media/` for on-disk paths."""
    return str(md_path.parent / 'media') + '/'


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--docx', required=True, type=Path)
    ap.add_argument('--md', required=True, type=Path)
    ap.add_argument('--dpi', type=int, default=96)
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--manifest', type=Path,
                    help='where to write the crop manifest JSON (default: <md>.crops.json)')
    args = ap.parse_args()

    drawings = extract_drawings(args.docx)
    md_text  = args.md.read_text(encoding='utf-8')
    media_prefix = derive_media_prefix(args.md)

    new_md, crop_jobs = rewrite(md_text, drawings, args.dpi, media_prefix)

    print(f'docx drawings : {len(drawings)}')
    print(f'cropped       : {sum(1 for d in drawings if d["crop"])}')
    print(f'unique crops  : {len(crop_jobs)}')

    manifest_path = args.manifest or args.md.with_suffix(args.md.suffix + '.crops.json')

    if args.dry_run:
        print(f'(dry-run) would write {args.md}')
        print(f'(dry-run) would write {manifest_path}')
        for j in crop_jobs[:5]:
            print(' ', j)
        return

    args.md.write_text(new_md, encoding='utf-8')
    print(f'wrote {args.md}')
    manifest_path.write_text(json.dumps(crop_jobs, indent=2), encoding='utf-8')
    print(f'wrote {manifest_path}')
    if crop_jobs:
        print(f'\nNext step: node tools/crop-images.js {manifest_path}')


if __name__ == '__main__':
    main()
