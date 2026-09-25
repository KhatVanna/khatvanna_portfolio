import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "blog-post");
fs.mkdirSync(outDir, { recursive: true });

const POSTS = [
  {
    key: "behavioral",
    url: "https://conax.webflow.io/blog/how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions",
  },
  {
    key: "motion",
    url: "https://conax.webflow.io/blog/motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability",
  },
  {
    key: "scalable",
    url: "https://conax.webflow.io/blog/implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention",
  },
  {
    key: "minimalist",
    url: "https://conax.webflow.io/blog/why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech",
  },
  {
    key: "ai",
    url: "https://conax.webflow.io/blog/how-ai-is-redefining-the-next-generation-of-user-interfaces",
  },
];

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

for (const post of POSTS) {
  const html = await fetchText(post.url);
  const urls = [
    ...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
  ]
    .map((m) => m[0].replace(/&amp;/g, "&"))
    .filter((u) => !/-p-\d+\./.test(u) && !/Site%20icon|Conax%C2%AE|favicon|OG%20Image|Avatar/i.test(u));

  const unique = [...new Set(urls)];
  console.log("\n===", post.key, "images", unique.length);
  unique.slice(0, 4).forEach((u, i) => console.log(i, u));

  // First non-avatar image is typically the hero; find landscape-ish or first large webp
  const heroUrl = unique[0];
  if (!heroUrl) continue;
  const dest = path.join(outDir, `hero-${post.key}.webp`);
  await download(heroUrl, dest);
  const meta = await sharp(dest).metadata();
  console.log("saved", post.key, meta.width, meta.height, fs.statSync(dest).size);
}
