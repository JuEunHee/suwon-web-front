import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import pluginNext from "@next/eslint-plugin-next";
import pluginImport from "eslint-plugin-import";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import pluginPrettier from "eslint-plugin-prettier";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@next/next": pluginNext,
      import: pluginImport,
      perfectionist: pluginPerfectionist,
      prettier: pluginPrettier,
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          minimumDescriptionLength: 10,
          "ts-ignore": "allow-with-description",
        },
      ],
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // JavaScript rules
      eqeqeq: ["error", "always", { null: "ignore" }],
      "max-len": 0,
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": 0, // Using TypeScript version instead
      "no-var-requires": 0,
      "prefer-const": "error",

      // Import rules
      "import/no-cycle": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",
      "import/no-unused-modules": "warn",
      "import/order": 0, // Using perfectionist/sort-imports instead

      // Perfectionist rules
      "perfectionist/sort-classes": [
        "error",
        {
          type: "natural",
          groups: [
            "static-property",
            "private-property",
            "property",
            "constructor",
            "static-method",
            "private-method",
            "method",
          ],
          order: "asc",
        },
      ],
      "perfectionist/sort-enums": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          customGroups: {
            value: {
              suwon: "@suwon-web-front/**",
            },
          },
          environment: "node",
          groups: [
            "type",
            ["builtin", "external", "suwon"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "style",
            "unknown",
          ],
          ignoreCase: true,
          internalPattern: ['^~/.+'],
          newlinesBetween: "always",
          order: "asc",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "natural",
          customGroups: {
            intents: ["primary", "secondary", "neutral", "faint", "accent", "info", "success", "warning", "danger"],
            scales: ["xl", "lg", "md", "sm", "xs"],
            variants: ["variants", "intents", "scales", "sizes", "states"],
            ids: ["id", "_id"],
            keys: ["key", "queryKey", "mutationKey"],
            react: ["children", "ref", "className"],
            types: ["type"],
          },
          groups: ["react", "ids", "keys", "types", "variants", "scales", "intents"],
          order: "asc",
          partitionByNewLine: true,
          styledComponents: true,
        },
      ],

      // Prettier rules
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: true,
          trailingComma: "all",
          printWidth: 80,
          tabWidth: 2,
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "lf",
        },
      ],

      // React rules
      "react/display-name": 0,
      "react/hook-use-state": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", { children: "never", props: "never" }],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-uses-react": "off",
      "react/prop-types": 0,
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "error",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    ignores: [
      "dist",
      "node_modules",
      "*.d.ts",
      "webpack.*.js",
      "babel.config.js",
      "*.test.*",
      ".next",
      ".idea",
    ],
  },
];
