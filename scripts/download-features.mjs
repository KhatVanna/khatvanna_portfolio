import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "features");
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

const assets = {
  "feature-engineering.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a6ad2fada777b5f8ae0cf65_1df733e8404290fddf88b94d8b2ae255b85ffe45.webp",
  "feature-systems.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a6ad2c203908f50cca1b8cc_image%2019074.webp",
  "feature-ux.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a6ad2c24336a9e9e6c202cb_image%20154.webp",
  "feature-alt.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a6ad2c2f9b3e51fada2780b_f8437a9d13c5c0813f96f23c56199ad5c08e1276.webp",
  "feature-19069.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a603f823ee33b8dad0f3d7d_image%2019069.webp",
};

for (const [name, url] of Object.entries(assets)) {
  const dest = path.join(outDir, name);
  await download(url, dest);
  const png = dest.replace(/\.webp$/, ".png");
  await sharp(dest).resize(480).png().toFile(png);
  console.log("ok", name, fs.statSync(dest).size);
}
