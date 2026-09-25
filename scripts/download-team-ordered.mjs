import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "team");
fs.mkdirSync(outDir, { recursive: true });

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

const html = fs.readFileSync(path.join(__dirname, "about-us.html"), "utf8");
const urls = [
  ...html.matchAll(
    /src="(https:\/\/cdn\.prod\.website-files\.com\/[^"]+)"[^>]*class="avatar-member-collection"/g,
  ),
].map((m) => m[1].replace(/&amp;/g, "&"));

for (let i = 0; i < urls.length; i++) {
  const dest = path.join(outDir, `member-${i}.webp`);
  await download(urls[i], dest);
  console.log("saved", i, fs.statSync(dest).size, urls[i].slice(-40));
}
