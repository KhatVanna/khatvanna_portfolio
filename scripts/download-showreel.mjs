import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "showreel");
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
const needles = ["ANAGRAM TEMPLATE", "SLIDING SQUARES", "SHOWREEL", "SHOW\nREEL", "COLLECTION"];

for (const n of needles) {
  const idx = html.indexOf(n);
  console.log(n.replace(/\n/g, "\\n"), idx);
  if (idx < 0) continue;
  const slice = html.slice(Math.max(0, idx - 5000), idx + 2000);
  const urls = [
    ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
  ].map((m) => m[0].replace(/&amp;/g, "&"));
  console.log(
    [...new Set(urls)]
      .filter((u) => !/-p-\d+\./.test(u))
      .slice(0, 15)
      .join("\n")
  );
}

// Also copy user-provided collage jpgs into public for reference/use
const assetsRoot = path.join(
  process.env.USERPROFILE || "",
  ".cursor/projects/e-PROJECT-STANDARD-2026-porfolio/assets"
);
console.log("assets exists", fs.existsSync(assetsRoot));
