import fs from "fs";
import https from "https";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images");
fs.mkdirSync(outDir, { recursive: true });

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
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
    const lib = url.startsWith("https") ? https : http;
    lib
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

const html = await fetchText("https://conax.webflow.io/");
const urls = [
  ...html.matchAll(/https:\/\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp|avif)/gi),
].map((m) => m[0].replace(/&amp;/g, "&"));
const unique = [...new Set(urls)];
console.log("Found", unique.length, "images");
unique.slice(0, 60).forEach((u, i) => console.log(i, u));

// Prefer hero-looking assets (cdn.prod.website-files.com)
const candidates = unique.filter((u) =>
  /website-files|images\.unsplash|cdn/i.test(u)
);

fs.writeFileSync(path.join(root, "conax-images.json"), JSON.stringify(unique, null, 2));

// Download first few distinct large assets for hero + showreel
const picks = [];
for (const u of unique) {
  if (picks.length >= 8) break;
  if (!/\.(jpg|jpeg|png|webp)/i.test(u)) continue;
  picks.push(u);
}

let i = 0;
for (const url of picks) {
  const ext = path.extname(new URL(url).pathname) || ".jpg";
  const dest = path.join(outDir, `asset-${i}${ext}`);
  try {
    await download(url, dest);
    console.log("Saved", dest, "from", url.slice(0, 80));
    i++;
  } catch (e) {
    console.error("Fail", url, e.message);
  }
}
