import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"
import astro from "eslint-plugin-astro"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...configLehoczkyVue({
    parserOptionsForTypeChecking: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }),
  ...astro.configs["flat/recommended"],
]
