import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");

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

const needles = [
  "Write or code",
  "I can help you with anything",
  "NUMBERS THAT SPEAK",
  "Elevating Your Identity",
  "23K",
];

for (const n of needles) {
  const idx = html.indexOf(n);
  console.log("\n===", n, idx);
  if (idx < 0) continue;
  const slice = html.slice(Math.max(0, idx - 4000), idx + 800);
  const near = [
    ...slice.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi),
  ].map((m) => m[0].replace(/&amp;/g, "&"));
  [...new Set(near)]
    .filter((u) => !/-p-\d+\./.test(u))
    .forEach((u) => console.log(u));
}

// Known likely assets from earlier scrape
const picks = {
  "why-team.webp":
    unique.find((u) => /5913b319b5b0fc3cbc66bc_image%20120|image%20120\.webp/i.test(u)) ||
    unique.find((u) => /bb2c315a|8073b738|7934dc6|e853485|7b168d3/i.test(u)),
  "avatar-1.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a4dcb9523d076515103dfb3_bace5e82f617bbf813f5b3d4e8200d7e6600af92.webp",
  "avatar-2.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a4dcb95bf3be45c7c85c3bd_8073b73826b7188cbe05d7b867a655b7841d83b7.webp",
  "avatar-3.webp":
    "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a4dcb95aa8d061c762c1d17_bb2c315a74962e6507c9138449389e6eb13afc2c.webp",
};

// Prefer meeting/office looking images near AI UI
const meetingGuess = unique.filter((u) =>
  /120|team|office|meeting|people|testimo|Frame/i.test(decodeURIComponent(u))
);
console.log("\nMeeting guesses:");
meetingGuess.slice(0, 15).forEach((u) => console.log(u));

if (meetingGuess[0]) picks["why-team.webp"] = meetingGuess[0];
// image 120 was in earlier list
picks["why-team.webp"] =
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a5913b319b5b0fc3cbc66bc_image%20120.webp";

for (const [name, url] of Object.entries(picks)) {
  if (!url) continue;
  await download(url, path.join(outDir, name));
  console.log("Saved", name);
}

// Also grab a couple more team/meeting candidates
const extras = [
  "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa15a8cb22d0428036d8a01_6a559dfd75731a5ffe1b8362_7b168d3.webp",
  "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa15c55041aa62269dfc3a5_6a5ef44a31795eb4b080b183_Frame%201.webp",
];
let i = 0;
for (const url of extras) {
  await download(url, path.join(outDir, `why-extra-${i}.webp`));
  console.log("extra", i, url);
  i++;
}
