import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");
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
  // Phone in hand from earlier Image Cover
  "approach-phone.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a715430108c711c58f2b73b_25a06f2c2480e3f89913dd2ae9014b92_Image%20Cover.webp",
  // Testimonial avatar candidates
  "avatar-mark.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a4dcb9523d076515103dfb3_bace5e82f617bbf813f5b3d4e8200d7e6600af92.webp",
};

for (const [name, url] of Object.entries(assets)) {
  await download(url, path.join(outDir, name));
  console.log("OK", name);
}
