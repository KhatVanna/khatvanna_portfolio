import fs from "fs";

const svgPath = "public/images/brand/khat-vanna-logo.svg";
let svg = fs.readFileSync(svgPath, "utf8");

// Normalize fills: glyphs → currentColor; drop white (background) fills
svg = svg
  .replace(/fill="rgb\(0,\s*0,\s*0\)"/g, 'fill="currentColor"')
  .replace(/stroke="rgb\(0,\s*0,\s*0\)"/g, 'stroke="none"')
  .replace(/fill="rgb\(255,\s*255,\s*255\)"[^>]*\/?>/g, "")
  .replace(/stroke="rgb\(255,\s*255,\s*255\)"/g, 'stroke="none"')
  .replace(/\s+opacity="1"/g, "")
  .replace(/\s+stroke-width="0"/g, "")
  .replace(/desc="[^"]*"/g, "")
  .replace(/version="1.1"\s*/g, "")
  .replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"\s+xmlns="http:\/\/www.w3.org\/2000\/svg"/, 'xmlns="http://www.w3.org/2000/svg"')
  .replace(/width="993" height="139"/, 'width="993" height="139"')
  .replace(/\s{2,}/g, " ");

// Ensure color attribute for easy theming
if (!svg.includes('color=')) {
  svg = svg.replace("<svg ", '<svg color="#000000" ');
}

fs.writeFileSync(svgPath, svg.trim() + "\n");

// Convenience copies
fs.copyFileSync(
  "public/images/brand/khat-vanna-logo.png",
  "public/images/brand/logo-transparent.png",
);
fs.copyFileSync(
  "public/images/brand/khat-vanna-logo-black.png",
  "public/images/brand/logo-transparent-black.png",
);
fs.copyFileSync(svgPath, "public/images/brand/logo.svg");

console.log("cleaned svg bytes", fs.statSync(svgPath).size);
