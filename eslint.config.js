import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            "@babel/plugin-syntax-typescript",
            "@babel/plugin-syntax-jsx",
          ],
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-undef": "off",
      "no-unused-vars": "off",
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: ["**/*.{js,ts,tsx}"],
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
];
