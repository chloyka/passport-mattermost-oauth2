import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import path from "path";

const rootPath = process.cwd();
const extensions = [".js", ".jsx", ".ts", ".tsx", ".json"];
const babelConfig = path.resolve(__dirname, "babel.config.js");
const packageJson = require(path.join(rootPath, "package.json"));

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      exports: "named",
      file: packageJson.main,
    },
    {
      format: "es",
      exports: "named",
      file: packageJson.module,
    },
  ],
  plugins: [
    babel({
      extensions,
      babelrc: false,
      babelHelpers: "bundled",
      configFile: babelConfig,
      exclude: "node_modules/**",
    }),
    resolve({ extensions }),
    commonjs({ extensions }),
  ],
  external: Object.keys(Object.assign({}, packageJson.dependencies, packageJson.peerDependencies)),
};
