const { withCustomConfig } = require("react-docgen-typescript");
const path = require("path");
const fs = require("fs");
const componentFile = path.join(__dirname, "./src/Buttons/Button/Button.tsx");

const tsConfig = path.join(process.cwd(), "./tsconfig.json");

const parser = withCustomConfig(tsConfig, {});

const components = parser.parse(componentFile);

fs.writeFileSync("./button-doc.json", JSON.stringify(components), {
  encoding: "utf-8",
});
