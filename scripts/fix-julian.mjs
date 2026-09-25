import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "about-us.html"), "utf8");
const idx = html.indexOf("Julian Frost");
const slice = html.slice(Math.max(0, idx - 4000), idx + 500);
const urls = [
  ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
]
  .map((m) => m[0].replace(/&amp;/g, "&"))
  .filter((u) => !/-p-\d+\./.test(u));
console.log([...new Set(urls)]);

// Also print raw around img tags before Julian
const near = html.slice(Math.max(0, idx - 1500), idx + 200);
console.log("\n--- near ---\n", near.replace(/></g, ">\n<").split("\n").filter(l => /img|Julian|src=|Alex/.test(l)).join("\n"));
