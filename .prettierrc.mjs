// @ts-check
import config from "@lehoczky/prettier-config"

/**
 * @type {import("prettier").Options & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  ...config,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/assets/styles/base.css",
  tailwindFunctions: ["cn", "clsx"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
