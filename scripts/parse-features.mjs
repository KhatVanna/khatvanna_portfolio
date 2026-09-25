import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "about-us.html"), "utf8");

const i = html.indexOf("HIGH-VELOCITY");
console.log("idx", i);
const slice = html.slice(Math.max(0, i - 12000), i + 20000);
fs.writeFileSync(path.join(__dirname, "features-slice.html"), slice);

const imgs = [...slice.matchAll(/src="([^"]+)"/g)].map((m) => m[1]);
const srcsets = [...slice.matchAll(/srcset="([^"]+)"/g)].flatMap((m) =>
  m[1].split(",").map((s) => s.trim().split(/\s+/)[0]),
);
const bg = [...slice.matchAll(/url\(([^)]+)\)/g)].map((m) => m[1].replace(/['"]/g, ""));

console.log("\n=== SRC ===");
[...new Set(imgs)].forEach((u) => console.log(u));
console.log("\n=== SRCSET ===");
[...new Set(srcsets)].forEach((u) => console.log(u));
console.log("\n=== BG URL ===");
[...new Set(bg)].forEach((u) => console.log(u));

// Find style background-image near titles
for (const key of ["HIGH-VELOCITY", "ADAPTIVE", "DATA-"]) {
  const idx = html.indexOf(key);
  const near = html.slice(Math.max(0, idx - 5000), idx + 1500);
  const urls = [
    ...near.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s)>]+/gi),
  ].map((m) => m[0].replace(/&amp;/g, "&"));
  console.log("\n---", key, "---");
  [...new Set(urls)].slice(0, 15).forEach((u) => console.log(u));
}
