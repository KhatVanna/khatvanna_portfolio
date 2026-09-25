import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "studio");
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

const html = await fetchText("https://conax.webflow.io/about-us");
fs.writeFileSync(path.join(__dirname, "about-us.html"), html);
console.log("html length", html.length);

const urls = [
  ...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
].map((m) => m[0].replace(/&amp;/g, "&"));
const unique = [...new Set(urls)].filter((u) => !/-p-\d+\./.test(u));
console.log("images", unique.length);
unique.slice(0, 40).forEach((u, i) => console.log(i, u));

// Prefer photo-like assets near STUDIO text
const idx = html.indexOf("STUDIO");
console.log("STUDIO idx", idx);
const slice = html.slice(Math.max(0, idx - 2000), idx + 15000);
const near = [
  ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
].map((m) => m[0].replace(/&amp;/g, "&"));
const nearUnique = [...new Set(near)].filter((u) => !/-p-\d+\./.test(u));
console.log("\nNear STUDIO:");
nearUnique.forEach((u, i) => console.log(i, u));

let i = 0;
for (const url of nearUnique.slice(0, 16)) {
  const ext = path.extname(new URL(url).pathname) || ".webp";
  await download(url, path.join(outDir, `studio-${i}${ext}`));
  console.log("saved", i);
  i++;
}
