import sharp from "sharp";

for (let i = 0; i < 4; i++) {
  await sharp(`public/images/works/work-${i}.webp`)
    .resize(320)
    .png()
    .toFile(`public/images/works/_p${i}.png`);
  console.log("ok", i);
}
