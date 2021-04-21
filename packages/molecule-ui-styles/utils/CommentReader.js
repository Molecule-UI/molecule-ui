const parse = require("comment-parser");
const fs = require("fs");
const path = require("path");
const docsPath = path.resolve(__dirname, "../docs/documentation.js");
const cssPath = path.resolve(__dirname, "../build/molecule.css");

const cssData = fs.readFileSync(cssPath, "utf-8");

const comments = parse(cssData, { dotted_names: false, join: true });

const modifiedData = comments.map((el) => {
  delete el.description;
  delete el.line;
  delete el.source;

  el.tags.map((el) => {
    delete el.type;
    delete el.source;
    delete el.line;
  });

  if (el.tags[el.tags.length - 1].name === "list") {
    const object = {};
    const values = el.tags[el.tags.length - 3].description.split(" ");
    values.forEach((value) => {
      object[value] = value;
    });

    el.tags[el.tags.length - 3].description = object;
  }

  if (el.tags[el.tags.length - 1].name === "map") {
    const object = {};
    const values = el.tags[el.tags.length - 3].description
      .replace("(", "")
      .replace(")", "")
      .split(",");
    values.map((value) => {
      const keyValuePair = value.replace(/"/g, "").replace(/ /g, "").split(":");
      object[keyValuePair[0]] = keyValuePair[1];
    });

    el.tags[el.tags.length - 3].description = object;
  }

  return el;
});

const cleanedData = modifiedData.map((el) => {
  const newObject = {};

  el.tags.forEach((el) => {
    if (el.tag === "desc:" || el.tag === "values:") {
      newObject[el.tag.replace(":", "")] = el.description;
    } else {
      newObject[el.tag.replace(":", "")] = el.name;
    }
  });

  return newObject;
});

// console.log(cleanedData[4]);

const writeData = `module.exports=${JSON.stringify(cleanedData)}`;
(async (writeData) => {
  await fs.writeFileSync(docsPath, writeData, { encoding: "utf-8" });
})(writeData);
