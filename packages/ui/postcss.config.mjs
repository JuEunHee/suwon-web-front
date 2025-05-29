import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [postcssImport, postcssPresetEnv, tailwindcss, autoprefixer],
};
