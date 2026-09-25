import sharp from "sharp";

for (let i = 0; i < 8; i++) {
  await sharp(`public/images/services/svc-${i}.webp`)
    .resize(400)
    .png()
    .toFile(`public/images/services/_c${i}.png`);
  console.log("ok", i);
}
