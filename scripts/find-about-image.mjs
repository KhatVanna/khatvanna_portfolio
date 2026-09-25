import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");

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

const html = await fetchText("https://conax.webflow.io/");
const needle = "We bridge the gap between technology";
const idx = html.indexOf(needle);
console.log("text idx", idx);
const slice = html.slice(Math.max(0, idx - 8000), idx + 500);
const urls = [
  ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
].map((m) => m[0].replace(/&amp;/g, "&"));
const unique = [...new Set(urls)].filter((u) => !/-p-\d+\./.test(u));
console.log("Near about text:");
unique.forEach((u) => console.log(u));

// Image Cover is often the about visual on Conax templates
const cover =
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a715430108c711c58f2b73b_25a06f2c2480e3f89913dd2ae9014b92_Image%20Cover.webp";
const img83 =
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a681eb45f631eb8b39e7dc2_image%2083.webp";

await download(cover, path.join(outDir, "about-cover.webp"));
await download(img83, path.join(outDir, "about-83.webp"));
console.log("downloaded cover + 83");

// Convert to PNG via sharp if available, else leave webp
try {
  const sharp = (await import("sharp")).default;
  for (const name of ["about-cover.webp", "about-83.webp", "about.webp"]) {
    const src = path.join(outDir, name);
    if (!fs.existsSync(src)) continue;
    const dest = path.join(outDir, name.replace(".webp", ".png"));
    await sharp(src).png().toFile(dest);
    console.log("png", dest);
  }
} catch (e) {
  console.log("sharp unavailable:", e.message);
}
