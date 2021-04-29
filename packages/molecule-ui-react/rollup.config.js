import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import purgecss from "rollup-plugin-purgecss";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import glob from "glob";
import uncss from "postcss-uncss";
import remover from "postcss-remove-unused-css";
import nodeResolver from "@rollup/plugin-node-resolve";
const sources = [];
glob.sync("./src/**/*.tsx").forEach((filePath) => {
  sources.push(filePath);
});

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "./build/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  // preserveModules: true,
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: false }),
    purgecss({ content: ["src/index.tsx"] }),
    commonjs(),
    postcss({
      extensions: [".css"],
      plugins: [
        remover({
          path: "./src",
          exts: [".tsx"],
        }),
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
