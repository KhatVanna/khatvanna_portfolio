import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "speed");
fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

const html = fs.readFileSync(path.join(__dirname, "about-us.html"), "utf8");
const start = html.indexOf("SPEED AS A");
const end = html.indexOf("THE TEAM", start);
const slice = html.slice(start, end > start ? end : start + 20000);
fs.writeFileSync(path.join(__dirname, "speed-block.html"), slice);

const urls = [
  ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
]
  .map((m) => m[0].replace(/&amp;/g, "&"))
  .filter((u) => !/-p-\d+\./.test(u));

const unique = [...new Set(urls)];
console.log("images", unique.length);
unique.forEach((u, i) => console.log(i, u));

for (let i = 0; i < unique.length; i++) {
  const dest = path.join(outDir, `speed-${i + 1}.webp`);
  await download(unique[i], dest);
  await sharp(dest).resize(480).grayscale().png().toFile(path.join(outDir, `_preview-${i + 1}.png`));
  console.log("saved", path.basename(dest), fs.statSync(dest).size);
}
