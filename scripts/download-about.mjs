import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(outDir, { recursive: true });

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

const html = await fetchText("https://conax.webflow.io/");
const urls = [
  ...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
].map((m) => m[0].replace(/&amp;/g, "&"));
const unique = [...new Set(urls)].filter((u) => !/-p-\d+\./.test(u));

// Prefer about/monitor-looking assets by filename hints from the live site
const aboutCandidates = unique.filter((u) =>
  /83|about|monitor|cover|studio|rock|image%20cover|Image%20Cover|19068|bace5e|8073b7|bb2c31/i.test(
    decodeURIComponent(u)
  )
);

console.log("Candidates:");
aboutCandidates.slice(0, 20).forEach((u) => console.log(u));

const picks = {
  "about.webp":
    aboutCandidates.find((u) => /image%2083|image 83/i.test(u)) ||
    aboutCandidates[0] ||
    unique.find((u) => /Image%20Cover/i.test(u)),
};

for (const [name, url] of Object.entries(picks)) {
  if (!url) {
    console.log("Missing", name);
    continue;
  }
  await download(url, path.join(outDir, name));
  console.log("Saved", name, url);
}

// Also save a few more likely about images for manual pick
let i = 0;
for (const url of aboutCandidates.slice(0, 6)) {
  const dest = path.join(outDir, `about-candidate-${i}.webp`);
  await download(url, dest);
  console.log("Candidate", i, url);
  i++;
}
