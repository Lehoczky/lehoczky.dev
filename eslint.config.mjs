import "eslint-plugin-only-warn"

import path from "node:path"
import { fileURLToPath } from "node:url"

import { includeIgnoreFile } from "@eslint/compat"
import js from "@eslint/js"
import configPrettier from "eslint-config-prettier"
import astro from "eslint-plugin-astro"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import vue from "eslint-plugin-vue"
import ts from "typescript-eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default ts.config(
  {
    ignores: [
      "*.min.*",
      "CHANGELOG.md",
      "dist",
      "LICENSE*",
      "output",
      "coverage",
      "temp",
      "cache",
      "pnpm-lock.yaml",
      "__snapshots__",
      "!.github",
      "!.vscode",
    ],
  },
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  {
    rules: {
      complexity: ["warn", { max: 13 }],
      "default-case-last": "warn",
      eqeqeq: ["warn", "smart"],
      "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
      "grouped-accessor-pairs": ["warn", "getBeforeSet"],
      "max-depth": ["warn", 6],
      "max-params": ["warn", { max: 8 }],
      "no-caller": "warn",
      "no-constructor-return": "warn",
      "no-extend-native": "warn",
      "no-implicit-coercion": ["warn", { boolean: false }],
      "no-lonely-if": "warn",
      "no-multi-str": "warn",
      "no-nested-ternary": "warn",
      "no-promise-executor-return": "warn",
      "no-return-assign": "warn",
      "no-throw-literal": "warn",
      "no-unneeded-ternary": "warn",
      "no-unreachable-loop": "warn",
      "no-useless-concat": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "object-shorthand": "warn",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-object-spread": "warn",
      "prefer-rest-params": "warn",
      "prefer-template": "warn",
      radix: "warn",
      "require-await": "warn",
      yoda: ["warn", "never", { exceptRange: true }],
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
    },
  },
  ...ts.configs.recommended,
  {
    rules: {
      "no-undef": "off",

      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
      "@typescript-eslint/consistent-generic-constructors": [
        "warn",
        "constructor",
      ],
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        { accessibility: "no-public" },
      ],
      "@typescript-eslint/no-extraneous-class": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",
    },
  },
  {
    files: ["src/**/*"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ["*.cjs"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  ...vue.configs["flat/recommended"],
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      "@typescript-eslint/prefer-function-type": "off",
      "vue/multi-word-component-names": "off",

      "vue/component-api-style": ["warn", ["script-setup"]],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/html-self-closing": ["warn", { html: { void: "always" } }],
      "vue/next-tick-style": ["error", "promise"],
      "vue/no-useless-mustaches": "warn",
      "vue/no-useless-v-bind": "warn",
      "vue/component-tags-order": [
        "warn",
        {
          order: ["script:not([setup])", "script[setup]", "template", "style"],
        },
      ],
      "vue/prefer-separate-static-class": "warn",
      "vue/prefer-true-attribute-shorthand": "warn",
      "vue/eqeqeq": ["warn", "smart"],
      "vue/no-sparse-arrays": "warn",
      "vue/no-useless-concat": "warn",
    },
  },
  ...astro.configs["flat/recommended"],
  configPrettier,
)
