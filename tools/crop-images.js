#!/usr/bin/env node
/* Apply image crops listed in a manifest produced by apply-docx-image-sizes.py.
 *
 *   node tools/crop-images.js path/to/manifest.json
 *
 * Manifest entry shape:
 *   {
 *     "src_filename": "image7.JPG",
 *     "src_path":     "frontend/src/assets/support/en/media/image7.JPG",
 *     "dst_path":     "frontend/src/assets/support/en/media/image7-cabc1234.JPG",
 *     "crop": { "l": 11339, "r": 0, "t": 15048, "b": 0 }
 *   }
 *
 * Crop values are Word's <a:srcRect> percentages in 1/100000ths. We convert
 * them to pixel offsets against each image's intrinsic dimensions, then use
 * sharp to extract the visible region.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAX = 100000;

async function applyCrop(job) {
  if (fs.existsSync(job.dst_path)) {
    return { skipped: true, dst: job.dst_path };
  }
  const meta = await sharp(job.src_path).metadata();
  const { width: w, height: h } = meta;
  const left   = Math.max(0, Math.round((job.crop.l / MAX) * w));
  const right  = Math.max(0, Math.round((job.crop.r / MAX) * w));
  const top    = Math.max(0, Math.round((job.crop.t / MAX) * h));
  const bottom = Math.max(0, Math.round((job.crop.b / MAX) * h));
  const cropW = w - left - right;
  const cropH = h - top - bottom;
  if (cropW <= 0 || cropH <= 0) {
    throw new Error(`Bad crop for ${job.src_path}: ${cropW}x${cropH}`);
  }
  await sharp(job.src_path)
    .extract({ left, top, width: cropW, height: cropH })
    .toFile(job.dst_path);
  return { skipped: false, dst: job.dst_path, w: cropW, h: cropH };
}

async function main() {
  const manifestPath = process.argv[2];
  if (!manifestPath) {
    console.error('usage: node tools/crop-images.js <manifest.json>');
    process.exit(2);
  }
  const jobs = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`crop manifest : ${jobs.length} jobs`);

  let made = 0, skipped = 0;
  for (const job of jobs) {
    try {
      const r = await applyCrop(job);
      if (r.skipped) { skipped++; }
      else { made++; console.log(`  cropped ${path.basename(job.dst_path)} (${r.w}x${r.h})`); }
    } catch (err) {
      console.error(`  FAILED ${job.dst_path}: ${err.message}`);
      process.exitCode = 1;
    }
  }
  console.log(`done — made ${made}, already-existed ${skipped}`);
}

main();
