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

const html = await fetchText("https://conax.webflow.io/works/luma-health");
fs.writeFileSync(path.join(__dirname, "_luma.html"), html);
const urls = [...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+/gi)]
  .map((m) => m[0].replace(/&amp;/g, "&"));
[...new Set(urls)].forEach((u, i) => console.log(i, u));
