import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "services");
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
  "UI/UX Design",
  "Brand Identity",
  "Web Development",
  "Digital Strategy",
  "USER RESEARCH",
  "PACKAGING DESIGN",
  "REACT/NEXT",
  "MARKET ANALYSIS",
];

const allNear = [];
for (const n of needles) {
  const idx = html.indexOf(n);
  console.log(n, idx);
  if (idx < 0) continue;
  const slice = html.slice(Math.max(0, idx - 3000), idx + 1500);
  const urls = [
    ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
  ].map((m) => m[0].replace(/&amp;/g, "&"));
  for (const u of urls) {
    if (!/-p-\d+\./.test(u) && !allNear.includes(u)) allNear.push(u);
  }
}

console.log("\nNear service images:");
allNear.forEach((u, i) => console.log(i, u));

// Download unique near images as service-0..n
let i = 0;
for (const url of allNear.slice(0, 12)) {
  const dest = path.join(outDir, `svc-${i}.webp`);
  try {
    await download(url, dest);
    console.log("Saved", `svc-${i}.webp`);
    i++;
  } catch (e) {
    console.error("fail", url, e.message);
  }
}
