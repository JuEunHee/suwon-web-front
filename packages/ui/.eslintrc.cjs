const eslint = require('@suwon-web-front/eslint-config');

module.exports = Object.assign(eslint, {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useIsoMorphicEffect)"
    }],
  }
});
