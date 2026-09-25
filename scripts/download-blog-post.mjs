import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "blog-post");
fs.mkdirSync(outDir, { recursive: true });

const PAGE =
  "https://conax.webflow.io/blog/why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography";

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

const html = await fetchText(PAGE);
fs.writeFileSync(path.join(__dirname, "_blog-post.html"), html);

const urls = [
  ...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
]
  .map((m) => m[0].replace(/&amp;/g, "&"))
  .filter((u) => !/-p-\d+\./.test(u) && !/Site%20icon|Conax%C2%AE|favicon|OG%20Image/i.test(u));

const unique = [...new Set(urls)];
console.log("images", unique.length);
unique.forEach((u, i) => console.log(i, u));

for (let i = 0; i < unique.length; i++) {
  const dest = path.join(outDir, `img-${String(i).padStart(2, "0")}.webp`);
  await download(unique[i], dest);
  const meta = await sharp(dest).metadata();
  console.log("saved", i, meta.width, meta.height, fs.statSync(dest).size);
}
