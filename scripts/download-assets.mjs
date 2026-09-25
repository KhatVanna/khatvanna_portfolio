import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const assets = {
  "hero.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a7000d1faf835ece0dc7642_f51247dae4976e4a6d3bbb2ac9d27b6a_Image%20Hero.webp",
  "showreel-1.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a66bf5c07113f2610ec98be_f61a8ef2a2fdddf7486b6acfa6b9346e97e1bc68.webp",
  "showreel-2.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a682bb03a3dce58fe62b1aa_7c5bcfbfd03011622af2760cb0131da0005a6de4.webp",
  "showreel-3.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a70052c9b82105cdebc3f9a_image%2019068.webp",
  "logo-white.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a3374d7792584d66ee79eee_Conax%C2%AE.webp",
  "logo-black.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a33753a341469218c9fd065_Conax%C2%AE-black.webp",
};

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

for (const [name, url] of Object.entries(assets)) {
  const dest = path.join(outDir, name);
  await download(url, dest);
  console.log("OK", name);
}
