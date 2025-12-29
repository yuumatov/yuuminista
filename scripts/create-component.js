#!/usr/bin/env node

import fs from "fs";
import path from "path";

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Укажи имя компонента: npm run create Tag");
  process.exit(1);
}

const COMPONENTS_DIR = path.resolve("src/components");
const componentDir = path.join(COMPONENTS_DIR, componentName);

if (fs.existsSync(componentDir)) {
  console.error(`❌ Компонент ${componentName} уже существует`);
  process.exit(1);
}

// ---------- шаблоны ----------

const jsxTemplate = `import "./${componentName}.scss"

export default ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      
    </div>
  )
}
`;

const scssTemplate = `.${componentName.toLowerCase()} {
  
}
`;

const indexTemplate = `import ${componentName} from './${componentName}'

export default ${componentName}
`;

// ---------- создание ----------

fs.mkdirSync(componentDir, { recursive: true });

fs.writeFileSync(
  path.join(componentDir, `${componentName}.jsx`),
  jsxTemplate
);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.scss`),
  scssTemplate
);

fs.writeFileSync(
  path.join(componentDir, "index.js"),
  indexTemplate
);

console.log(`✅ Компонент ${componentName} создан`);
