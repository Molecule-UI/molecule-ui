import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";

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
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), commonjs(), css()],
  external: ["react", "react-dom", "classnames"],
};
