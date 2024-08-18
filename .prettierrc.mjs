import config from "@lehoczky/prettier-config"

/**
 * @type {import("prettier").Options & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  ...config,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  tailwindConfig: "./tailwind.config.ts",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
