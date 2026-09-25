import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "services-page");
const html = fs.readFileSync(path.join(__dirname, "services.html"), "utf8");

const idx = html.indexOf("image%20184");
console.log("idx", idx);
console.log(html.slice(idx - 200, idx + 800));

const srcsets = [...html.matchAll(/image%20184[^"']*srcset="([^"]+)"/gi)];
const all184 = [...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]*image%20184[^"'\\\s>]*/gi)].map(m => m[0]);
console.log("\nurls", [...new Set(all184)]);

// Also search for glass/cube in existing assets - showreel frame
const candidates = [
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a472cf57a51891d2e1d1c22_image%20184.webp",
  ...[...new Set(all184)],
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve(dest)));
    }).on("error", (err) => fs.unlink(dest, () => reject(err)));
  });
}

// Try showreel crystal which we know is high res
const showreel = path.join(__dirname, "..", "public", "images", "showreel");
if (fs.existsSync(showreel)) {
  for (const f of fs.readdirSync(showreel)) {
    const m = await sharp(path.join(showreel, f)).metadata();
    console.log("showreel", f, m.width, m.height);
  }
}

// Check if ux/cube image is better
const ux = path.join(__dirname, "..", "public", "images", "features", "ux.webp");
if (fs.existsSync(ux)) {
  console.log("ux", await sharp(ux).metadata());
}
