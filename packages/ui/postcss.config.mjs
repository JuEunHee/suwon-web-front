import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [postcssImport, postcssPresetEnv, tailwindcss, autoprefixer],
};