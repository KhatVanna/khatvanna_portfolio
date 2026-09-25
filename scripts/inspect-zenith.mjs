import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

const html = await fetchText("https://conax.webflow.io/works/zenith-brand-refresh");
fs.writeFileSync(path.join(__dirname, "zenith-html-snip.txt"), html.slice(0, 50000));

const needles = [
  "ZENITH BRAND REFRESH",
  "HORIZON",
  "CLIENT",
  "Northland Studio is an award",
  "Digital Brutalism",
  "Awwwards",
  "Average Session",
  "RELATED PROJECTS",
  "background-image",
  "srcset",
];

for (const n of needles) {
  const idx = html.indexOf(n);
  console.log("\n===", n, idx, "===");
  if (idx < 0) continue;
  const slice = html.slice(Math.max(0, idx - 800), idx + 600);
  const urls = [...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>)+]+/gi)].map(
    (m) => m[0].replace(/&amp;/g, "&"),
  );
  [...new Set(urls)].slice(0, 8).forEach((u) => console.log(u));
}

// All background urls
const bgs = [...html.matchAll(/url\(([^)]+)\)/gi)].map((m) => m[1].replace(/['"]/g, ""));
console.log("\nbackgrounds", bgs.length);
[...new Set(bgs)].filter((u) => u.includes("cdn")).forEach((u) => console.log(u));
