import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginAstro from "eslint-plugin-astro"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginVue from "eslint-plugin-vue"
import ts from "typescript-eslint"

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      "no-undef": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
)
