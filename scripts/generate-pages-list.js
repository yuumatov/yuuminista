#!/usr/bin/env node

import fs from "fs";
import path from "path";

const outputName = process.argv[2];

if (!outputName) {
  console.error("❌ Укажи имя страницы: npm run pages index");
  process.exit(1);
}

const PAGES_DIR = path.resolve("src/pages");
const OUTPUT_FILE = path.join(PAGES_DIR, `${outputName}.jsx`);

if (!fs.existsSync(PAGES_DIR)) {
  console.error("❌ Директория src/pages не найдена");
  process.exit(1);
}

// ---------- helpers ----------

const getTitleFromFile = (content) => {
  const match = content.match(/<title>(.*?)<\/title>/i);
  return match ? match[1] : null;
};

// ---------- scan pages ----------

const pages = fs
  .readdirSync(PAGES_DIR)
  .filter(
    (file) =>
      file.endsWith(".jsx") &&
      file !== `${outputName}.jsx`
  )
  .map((file) => {
    const filePath = path.join(PAGES_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");

    return {
      file,
      name: file.replace(".jsx", ""),
      title: getTitleFromFile(content),
    };
  })
  .filter((page) => page.title);

// ---------- template ----------

const pageTemplate = `import { Head } from "minista"

export default function () {
  return (
    <>
      <Head>
        <title>Pages list</title>
      </Head>

      <div className="pages-list">
        <h1>Pages</h1>
        <ul>
          ${pages
            .map(
              (page) =>
                `<li><a href="${page.name}">${page.title}</a></li>`
            )
            .join("\n          ")}
        </ul>
      </div>
    </>
  )
}
`;

fs.writeFileSync(OUTPUT_FILE, pageTemplate);

console.log(`✅ Страница ${outputName}.jsx создана`);
