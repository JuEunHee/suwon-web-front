import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";
import pluginPrettier from "eslint-plugin-prettier";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
      "prettier": pluginPrettier,
      "jsx-a11y": pluginJsxA11y,
      'import': pluginImport,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
          tabWidth: 2,
          jsxBracketSameLine: false,
          arrowParens: 'always',
          endOfLine: 'lf',
          bracketSameLine: false,
          bracketSpacing: true,
          singleAttributePerLine: true,
        },
      ],

      // Javascript
      'no-console': 'warn', // console.log 사용 경고
      'no-undef': 'warn',
      'no-unused-vars': 'off',
      
      // React
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off', // JSX props spreading 허용
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1, // 한 줄에 하나의 속성만 허용
          when: 'multiline', // 항상 줄바꿈 강제
        },
      ],

      // Typescript
      '@typescript-eslint/lines-between-class-members': 'off', // 클래스 멤버 사이에 빈 줄 강제 비활성화
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ], // 사용하지 않는 변수 경고

      // Accessibility
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      
      // Import
      'import/no-anonymous-default-export': 'off',
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'off', // 기본 export 강제 비활성화
      'import/order': [
        'error',
        {
          groups: [
            "builtin", // Node.js 기본 모듈
            "external", // 외부 라이브러리
            "internal", // 내부 모듈
            ["parent", "sibling", "index"], // 상대 경로
            "object", // 객체 형태의 import
            "type", // 타입 import
          ],
          pathGroups: [
            {
              pattern: "next",
              group: "builtin", // next를 builtin으로 처리
              position: "before",
            },
            {
              pattern: "next/**",
              group: "builtin", // next 하위 모듈도 builtin으로 처리
              position: "before",
            },
          ],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ]
    }
  },
];
