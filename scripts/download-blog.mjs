import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "blog");
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

const html = await fetchText("https://conax.webflow.io/");
const needles = [
  "Alex Reed",
  "Lily Vance",
  "Sophia Chen",
  "Marcus Thorne",
  "Conax News",
  "How AI is Redefining",
];

const found = [];
for (const n of needles) {
  const idx = html.indexOf(n);
  console.log(n, idx);
  if (idx < 0) continue;
  const slice = html.slice(Math.max(0, idx - 2500), idx + 1200);
  const urls = [
    ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
  ].map((m) => m[0].replace(/&amp;/g, "&"));
  for (const u of [...new Set(urls)].filter((x) => !/-p-\d+\./.test(x))) {
    if (!found.includes(u)) found.push(u);
  }
}

console.log("\nFound", found.length);
found.slice(0, 16).forEach((u, i) => console.log(i, u));

let i = 0;
for (const url of found.slice(0, 12)) {
  const ext = path.extname(new URL(url).pathname) || ".webp";
  await download(url, path.join(outDir, `post-${i}${ext}`));
  console.log("saved", i);
  i++;
}
