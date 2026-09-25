import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "about-us.html"), "utf8");

const start = html.indexOf("CONAX FEATURES");
const end = html.indexOf("WHY CHOOSE US");
const slice = html.slice(start, end > start ? end : start + 30000);
fs.writeFileSync(path.join(__dirname, "features-block.html"), slice);
console.log("block length", slice.length);

// Print a cleaned excerpt with tags of interest
const interesting = slice
  .replace(/></g, ">\n<")
  .split("\n")
  .filter((l) =>
    /img|src|srcset|background|style=|HIGH-VELOCITY|ADAPTIVE|DATA-|w-dyn|class="/i.test(l),
  )
  .slice(0, 120);
interesting.forEach((l) => console.log(l.slice(0, 200)));
