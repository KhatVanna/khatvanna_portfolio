import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "showreel");
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

const urls = [
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a66bf5c07113f2610ec98be_f61a8ef2a2fdddf7486b6acfa6b9346e97e1bc68.webp",
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a682bb03a3dce58fe62b1aa_7c5bcfbfd03011622af2760cb0131da0005a6de4.webp",
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a7000d1faf835ece0dc7642_f51247dae4976e4a6d3bbb2ac9d27b6a_Image%20Hero.webp",
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a70052c9b82105cdebc3f9a_image%2019068.webp",
  "https://cdn.prod.website-files.com/6a45deeff00d0def215b9360/6aa15b28636316a00524d6aa_6a5706739feaf5c0c9545f5a_image%201.webp",
  "https://cdn.prod.website-files.com/6a3364ca428b36afdf5f6d1f/6a681eb45f631eb8b39e7dc2_image%2083.webp",
];

for (let i = 0; i < urls.length; i++) {
  await download(urls[i], path.join(outDir, `frame-${i}.webp`));
  console.log("saved frame", i);
}

// Copy user collage screenshots as optional extras
const assets = path.join(
  process.env.USERPROFILE || "",
  ".cursor/projects/e-PROJECT-STANDARD-2026-porfolio/assets"
);
const picks = [
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_0ca007ae5cb10a87bbeb6539011eb953_images_image-efdd56b5-1bc3-485e-9630-c598632039b0.jpg",
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_0ca007ae5cb10a87bbeb6539011eb953_images_image-cad46e57-1c8b-4cb7-95ec-5c029d0bf8ca.jpg",
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_0ca007ae5cb10a87bbeb6539011eb953_images_image-81fd2a45-0cb3-41b8-93f4-1abd1cf078e3.jpg",
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_0ca007ae5cb10a87bbeb6539011eb953_images_image-987d5e87-b847-4a31-88cb-657c6e2bfac1.jpg",
];

for (const name of picks) {
  const src = path.join(assets, name);
  if (fs.existsSync(src)) {
    const dest = path.join(outDir, path.basename(name).replace(/^.*image-/, "ref-"));
    fs.copyFileSync(src, dest);
    console.log("copied", dest);
  }
}
