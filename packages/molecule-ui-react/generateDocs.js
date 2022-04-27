const { withCustomConfig } = require("react-docgen-typescript");
const path = require("path");
const fs = require("fs");
const tsConfig = path.join(process.cwd(), "./tsconfig.json");
const parser = withCustomConfig(tsConfig, {});
const componentFiles = [];

componentFiles.push(path.join(__dirname, "./src/Alert/Alert.tsx"));
componentFiles.push(
  path.join(__dirname, "./src/Alert/AlertTitle/AlertTitle.tsx")
);
componentFiles.push(path.join(__dirname, "./src/Buttons/Button/Button.tsx"));
componentFiles.push(
  path.join(__dirname, "./src/Buttons/ButtonGroup/ButtonGroup.tsx")
);
componentFiles.push(
  path.join(__dirname, "./src/Cards/ProfileCard/ProfileCard.tsx")
);

if (!fs.existsSync("./docs")) {
  fs.mkdirSync("./docs");
}

componentFiles.forEach((componentFile) => {
  const componentName = componentFile.split("/").pop().split(".")[0];
  const componentData = parser.parse(componentFile);

  fs.writeFileSync(
    `./docs/${componentName}.json`,
    JSON.stringify(componentData),
    {
      encoding: "utf-8",
    }
  );
});

// const componentFile = path.join(__dirname, "./src/Buttons/Button/Button.tsx");
// const tsConfig = path.join(process.cwd(), "./tsconfig.json");

// const parser = withCustomConfig(tsConfig, {});

// const components = parser.parse(componentFile);
// fs.writeFileSync("./button-doc.json", JSON.stringify(components), {
//   encoding: "utf-8",
// });
