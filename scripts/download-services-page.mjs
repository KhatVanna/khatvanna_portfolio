import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "services-page");
fs.mkdirSync(outDir, { recursive: true });

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchText(res.headers.location).then(resolve).catch(reject);
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

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

const html = await fetchText("https://conax.webflow.io/services");
fs.writeFileSync(path.join(__dirname, "services.html"), html);
console.log("html", html.length);

const start = html.indexOf("SERVICES");
const slice = html.slice(Math.max(0, start - 2000), start + 15000);
const urls = [
  ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
]
  .map((m) => m[0].replace(/&amp;/g, "&"))
  .filter((u) => !/-p-\d+\./.test(u));

const unique = [...new Set(urls)];
console.log("near SERVICES", unique.length);
unique.slice(0, 20).forEach((u, i) => console.log(i, u));

// Download first few candidates and preview
for (let i = 0; i < Math.min(unique.length, 6); i++) {
  const dest = path.join(outDir, `hero-cand-${i}.webp`);
  await download(unique[i], dest);
  await sharp(dest).resize(400).png().toFile(path.join(outDir, `_preview-${i}.png`));
  console.log("saved", i, fs.statSync(dest).size);
}
