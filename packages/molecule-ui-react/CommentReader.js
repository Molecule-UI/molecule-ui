const parse = require("comment-parser");
const fs = require("fs");
const path = require("path");
const docsPath = path.resolve(__dirname, "/docs/docmentation.js");

const jsPath = path.resolve(__dirname, "./src/Buttons/Button/Button.tsx");

const jsData = fs.readFileSync(jsPath, "utf-8");
const comments = parse.parse(jsData, { dotted_names: false, join: true });

console.log(comments);
