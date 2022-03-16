import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";

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
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), commonjs()],
  external: [
    "react",
    "react-dom",
    "classnames",
    "@moleculeui/styles/build/global.css",
    "@moleculeui/icons",
    "react-jss",
  ],
};
