# Authoring the support manual

The Symphony support page renders `manual.md` for each language. Two
audiences edit this file:

- **Developers** — replacing or updating the bundled defaults from a new
  master `.docx`.
- **Admins** — making small in-place edits via the in-app split-view editor
  (Support → Manual → "Edit manual").

## Files

```
frontend/src/assets/support/
  en/manual.md      ← bundled English default
  en/media/         ← English images
  sv/manual.md      ← bundled Swedish default
  sv/media/         ← Swedish images (currently identical content to en)
  WIO Symphony user manual ... .docx   ← master source
  WIO Symphony user manual ... .pdf    ← typeset reference
```

Production deploys read from `symphony.support.dir` (default
`/var/lib/symphony/support`); the bundled files are copied there on first
deploy and may diverge as admins edit them. Don't overwrite live edits on
re-deploy.

## Image sizing — the contract

Every `<img>` in `manual.md` should have explicit `width` and `height`
attributes (in CSS pixels, ≈96 px/inch). This keeps icons icon-sized,
prevents layout shift during load, and matches what the original document
author intended.

Use one of these forms:

```html
<!-- Most common: explicit dimensions from the master document -->
<img alt="..." src="/assets/support/en/media/imageNN.png" width="17" height="12">

<!-- Author shorthand for inline UI icons (≈1.4em tall, no break) -->
<img alt="..." src="..." class="inline-icon">

<!-- Author shorthand for medium thumbs (≤24rem, centred, breaks paragraph) -->
<img alt="..." src="..." class="thumb">

<!-- Author shorthand for full-width screenshots (centred, breaks paragraph) -->
<img alt="..." src="..." class="screenshot">
```

Plain markdown `![alt](src)` works too but produces an unsized image — fine
for a one-off, but it'll render at intrinsic pixel size and may overflow.
Prefer one of the forms above.

## Replacing the manual from a fresh `.docx`

When the master document is updated:

1. Drop the new `.docx` and `.pdf` into `frontend/src/assets/support/`.
2. Run [Pandoc](https://pandoc.org/) to convert:
   ```bash
   pandoc -f docx -t gfm \
     --extract-media=frontend/src/assets/support/en \
     'frontend/src/assets/support/WIO Symphony user manual ... .docx' \
     -o frontend/src/assets/support/en/manual.md
   ```
3. Manually clean the markdown:
   - The TOC comes out as nested links (`[Title [4](#anchor)](#anchor)`).
     Replace with a flat bulleted list of single links.
   - Strip the Pandoc-generated `{#explicit-id}` heading attributes — the
     Angular component derives heading IDs in JS from the heading text via
     `pandocId()`.
4. Inject image dimensions and crop info from the `.docx`:
   ```bash
   python3 tools/apply-docx-image-sizes.py \
     --docx 'frontend/src/assets/support/WIO Symphony user manual ... .docx' \
     --md   frontend/src/assets/support/en/manual.md
   ```
   Converts every `![alt](src)` into `<img alt="..." src="..." width="W" height="H">`
   using the per-occurrence `<wp:extent>` (96 px/inch by default; override
   with `--dpi`). Idempotent — safe to run on already-rewritten markdown.
   Add `--dry-run` to inspect first.

   The script also reads any `<a:srcRect>` cropping the document author
   applied (Word's image-crop tool) and writes a `manual.md.crops.json`
   manifest next to the markdown listing each unique crop.
5. Apply the crops to actual image bytes — required if step 4 reported any:
   ```bash
   cd tools && npm ci   # first time only, installs `sharp`
   node tools/crop-images.js frontend/src/assets/support/en/manual.md.crops.json
   ```
   Each unique crop produces one new file in `…/media/` named
   `imageN-c<8-hash>.<ext>`, and the markdown already references it.
   Already-existing crop outputs are skipped.
6. Mirror to Swedish until a translation exists. Both the manual and any
   freshly-created crop files need to be copied:
   ```bash
   cp -n frontend/src/assets/support/en/media/image*-c*.* \
         frontend/src/assets/support/sv/media/
   sed -e 's|/assets/support/en/|/assets/support/sv/|g' \
       -e 's|\*\*THE ENGLISH VERSION\*\*|**SVENSKA VERSIONEN**|' \
       frontend/src/assets/support/en/manual.md \
     > frontend/src/assets/support/sv/manual.md
   ```
7. Regenerate the `media/` folder for `sv/` from `en/` if non-cropped image
   filenames changed.

### About cropped images

The original Word document uses Word's "crop" tool to display tiny inline
icons that are actually slices of larger screenshots — e.g. `image7.JPG` is
a 1858×919 screenshot, but several inline 23×25 references show only the
user-icon corner of it. Pandoc strips crop info on export, which is why we
rebuild it from the docx XML and write the cropped slices as separate files.

Hand-edited markdown can't replicate this — if an admin needs a small piece
of a screenshot, the practical move is to either upload a pre-cropped image
or use one of the CSS classes below.

## Admin editing in the browser

Admins editing through the in-app editor can use any of the image forms
above. The textarea is plain-text; type HTML or markdown freely. Live
preview re-renders on each keystroke.

The save endpoint (`PUT /service/support/manual?lang=…`) is gated by the
`GRP_SYMPHONY_ADMIN` role. WildFly enforces; the admin button on the page
is only a UX cue.

## Things to watch for

- **Heading IDs are derived from heading text**, not from explicit
  attributes. If you rename a heading, the in-document anchor links need
  updating.
- **Hash-anchor clicks are intercepted** in the renderer because Angular's
  router would otherwise hijack them. Don't try to add `routerLink` to
  intra-document links.
- **Angular sanitises the rendered HTML.** `src`, `alt`, `width`, `height`,
  and `class` survive. `id` and event handlers are stripped — don't rely on
  them.
- **Same image, different sizes**: many UI icons are reused at multiple
  sizes (e.g. `image7.JPG` is both a 605×299 screenshot and a 23×25 inline
  icon). Each occurrence needs its own dimensions; the script handles that.
