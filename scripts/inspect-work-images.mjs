import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "work-page");

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

const html = await fetchText("https://conax.webflow.io/work");
// Dump nearby context for LUMA
const idx = html.toUpperCase().indexOf("LUMA");
console.log("LUMA idx", idx);
if (idx >= 0) {
  const slice = html.slice(Math.max(0, idx - 3000), idx + 1500);
  const urls = [...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+/gi)].map(
    (m) => m[0].replace(/&amp;/g, "&"),
  );
  console.log("near LUMA:");
  [...new Set(urls)].forEach((u) => console.log(u));
}

const idx2 = html.toUpperCase().indexOf("NORTHLAND");
console.log("\nNORTHLAND idx", idx2);
if (idx2 >= 0) {
  const slice = html.slice(Math.max(0, idx2 - 3000), idx2 + 1500);
  const urls = [...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+/gi)].map(
    (m) => m[0].replace(/&amp;/g, "&"),
  );
  console.log("near NORTHLAND:");
  [...new Set(urls)].forEach((u) => console.log(u));
}

// Also look for srcset larger variants
const srcsets = [...html.matchAll(/srcset="([^"]+)"/gi)].map((m) => m[1]);
console.log("\nsrcsets", srcsets.length);
for (const s of srcsets.slice(0, 20)) {
  console.log("---");
  console.log(s.slice(0, 300));
}
