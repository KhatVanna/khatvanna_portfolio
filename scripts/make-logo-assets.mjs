import fs from "fs";
import path from "path";
import sharp from "sharp";
import ImageTracer from "imagetracerjs";

const src = "public/images/brand/khat-vanna-source.png";
const outDir = "public/images/brand";

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Build white logo on transparent + black-on-white for tracing
const whiteRaw = Buffer.alloc(data.length);
const traceRaw = Buffer.alloc(data.length); // black glyphs on white

for (let i = 0; i < data.length; i += 4) {
  const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
  const isGlyph = lum > 40;
  if (isGlyph) {
    whiteRaw[i] = 255;
    whiteRaw[i + 1] = 255;
    whiteRaw[i + 2] = 255;
    whiteRaw[i + 3] = 255;

    traceRaw[i] = 0;
    traceRaw[i + 1] = 0;
    traceRaw[i + 2] = 0;
    traceRaw[i + 3] = 255;
  } else {
    whiteRaw[i] = 0;
    whiteRaw[i + 1] = 0;
    whiteRaw[i + 2] = 0;
    whiteRaw[i + 3] = 0;

    traceRaw[i] = 255;
    traceRaw[i + 1] = 255;
    traceRaw[i + 2] = 255;
    traceRaw[i + 3] = 255;
  }
}

const whitePng = await sharp(whiteRaw, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .trim()
  .png()
  .toBuffer();

const blackPng = await sharp(whitePng)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(async ({ data: d, info: meta }) => {
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] > 10) {
        d[i] = 0;
        d[i + 1] = 0;
        d[i + 2] = 0;
        d[i + 3] = 255;
      } else {
        d[i + 3] = 0;
      }
    }
    return sharp(d, {
      raw: { width: meta.width, height: meta.height, channels: 4 },
    })
      .png()
      .toBuffer();
  });

await fs.promises.writeFile(path.join(outDir, "khat-vanna-logo.png"), whitePng);
await fs.promises.writeFile(path.join(outDir, "khat-vanna-logo-black.png"), blackPng);

// Trace black-on-white
const tracePng = await sharp(traceRaw, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .trim()
  .png()
  .toBuffer();

const traceMeta = await sharp(tracePng).metadata();
const traceRawTrim = await sharp(tracePng)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const imagedata = {
  width: traceRawTrim.info.width,
  height: traceRawTrim.info.height,
  data: traceRawTrim.data,
};

const svg = ImageTracer.imagedataToSVG(imagedata, {
  ltres: 0.5,
  qtres: 0.5,
  pathomit: 4,
  colorsampling: 0,
  numberofcolors: 2,
  mincolorratio: 0,
  colorquantcycles: 1,
  blurradius: 0,
  linefilter: true,
  rightangleenhance: true,
  scale: 1,
  strokewidth: 0,
});

// Keep only dark fills as currentColor; drop white background fills
let out = svg
  .replace(/fill="#ffffff"/gi, 'fill="none"')
  .replace(/fill="#fff"/gi, 'fill="none"')
  .replace(/fill="#000000"/gi, 'fill="currentColor"')
  .replace(/fill="#000"/gi, 'fill="currentColor"')
  .replace(
    /<svg /,
    `<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Khat Vanna" color="#000000" `,
  );

if (!out.includes("viewBox")) {
  out = out.replace(
    /<svg /,
    `<svg viewBox="0 0 ${traceMeta.width} ${traceMeta.height}" `,
  );
}

await fs.promises.writeFile(path.join(outDir, "khat-vanna-logo.svg"), out);

console.log({
  white: (await sharp(whitePng).metadata()).width,
  black: (await sharp(blackPng).metadata()).width,
  svgBytes: out.length,
  view: `${traceMeta.width}x${traceMeta.height}`,
});
