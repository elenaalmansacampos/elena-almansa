import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";

const DIST = path.resolve("dist/assets");

const budgets = {
  jsGzip: 160 * 1024,
  cssGzip: 15 * 1024,
  total: 3 * 1024 * 1024
};

const files = await readdir(DIST);

let jsGzip = 0;
let cssGzip = 0;
let total = 0;

for (const file of files) {
  const fullPath = path.join(DIST, file);
  const info = await stat(fullPath);

  total += info.size;

  if (file.endsWith(".js")) {
    jsGzip += gzipSync(await readFile(fullPath)).length;
  }

  if (file.endsWith(".css")) {
    cssGzip += gzipSync(await readFile(fullPath)).length;
  }
}

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

console.log(`JS gzip: ${kb(jsGzip)} / ${kb(budgets.jsGzip)}`);
console.log(`CSS gzip: ${kb(cssGzip)} / ${kb(budgets.cssGzip)}`);
console.log(`Total assets: ${kb(total)} / ${kb(budgets.total)}`);

const failures = [];

if (jsGzip > budgets.jsGzip) {
  failures.push("El JS supera el presupuesto.");
}

if (cssGzip > budgets.cssGzip) {
  failures.push("El CSS supera el presupuesto.");
}

if (total > budgets.total) {
  failures.push("El total de assets supera el presupuesto.");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Presupuesto de bundle OK");
