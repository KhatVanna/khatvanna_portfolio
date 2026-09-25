import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "team");
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

const names = [
  "Aris Thorne",
  "Chloe Whitmore",
  "Viktor Petrov",
  "Sarah Jenkins",
  "David Jones",
  "Elena Moretti",
  "Sophia Chen",
  "Marcus Thorne",
  "Lily Vance",
  "Alex Reed",
  "Julian Frost",
];

const html = await fetchText("https://conax.webflow.io/about-us");
fs.writeFileSync(path.join(__dirname, "about-us.html"), html);

const urls = [];
for (const name of names) {
  const idx = html.indexOf(name);
  if (idx < 0) {
    console.log("missing", name);
    continue;
  }
  const slice = html.slice(Math.max(0, idx - 2500), idx + 800);
  const found = [
    ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
  ]
    .map((m) => m[0].replace(/&amp;/g, "&"))
    .filter((u) => !/-p-\d+\./.test(u));
  // Prefer the last image before the name (usually the card image)
  const pick = found.at(-1) || found[0];
  console.log(name, pick);
  if (pick) urls.push({ name, url: pick });
}

for (let i = 0; i < urls.length; i++) {
  const { name, url } = urls[i];
  const dest = path.join(outDir, `member-${i}.webp`);
  await download(url, dest);
  console.log("saved", i, name, fs.statSync(dest).size);
}
