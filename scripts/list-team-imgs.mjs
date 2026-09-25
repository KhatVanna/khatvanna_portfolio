import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "about-us.html"), "utf8");

const imgs = [
  ...html.matchAll(
    /src="(https:\/\/cdn\.prod\.website-files\.com\/[^"]+)"[^>]*class="avatar-member-collection"/g,
  ),
].map((m) => m[1]);

const alt = [
  ...html.matchAll(
    /class="avatar-member-collection"[^>]*src="(https:\/\/cdn\.prod\.website-files\.com\/[^"]+)"/g,
  ),
].map((m) => m[1]);

console.log("order", imgs.length, alt.length);
[...imgs].forEach((u, i) => console.log(i, u));

// Also get all unique creativ/testimo/startup images in team block
const start = html.indexOf("THE TEAM");
const end = html.indexOf("NEWSLETTER", start);
const slice = html.slice(start, end);
const all = [
  ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
]
  .map((m) => m[0].replace(/&amp;/g, "&"))
  .filter((u) => !/-p-\d+\./.test(u));
console.log("\nunique in team block", [...new Set(all)].length);
[...new Set(all)].forEach((u, i) => console.log(i, u));
