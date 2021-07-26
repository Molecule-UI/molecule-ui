import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import glob from "glob";

const sources = [];
glob.sync("./src/**/*.tsx").forEach((filePath) => {
  sources.push(filePath);
});

export default {
  input: "./src/index.tsx",
  output: [
    {
      dir: "build",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  preserveModules: true,
  plugins: [
    sass(),
    typescript({ tsconfig: "./tsconfig.json" }),
    commonjs(),
  ],
  external: ["react", "react-dom"],
};
