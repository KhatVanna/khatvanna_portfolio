import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "blog-post");

const INLINES = [
  {
    key: "behavioral",
    url: "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa16409803a1dff5c1b5016_6a559f32d3978e0640ac800d_01%20Free.webp",
  },
  {
    key: "motion",
    url: "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa15c55041aa62269dfc3a5_6a5ef44a31795eb4b080b183_Frame%201.webp",
  },
  {
    key: "scalable",
    url: "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa15ff4e12e1d9159460b85_6a5eef7abcd6436f10e193a0_b9fca6a.webp",
  },
  {
    key: "minimalist",
    url: "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa15b512fe4f5de8a02e93e_6a57081913127724314f2b6f_d6073aa.webp",
  },
  {
    key: "ai",
    url: "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa162b3096ed173eed44478_6a5eefad16179111be87457c_image%201.webp",
  },
];

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

for (const item of INLINES) {
  const dest = path.join(outDir, `inline-${item.key}.webp`);
  await download(item.url, dest);
  const meta = await sharp(dest).metadata();
  console.log("saved", item.key, meta.width, meta.height);
}
