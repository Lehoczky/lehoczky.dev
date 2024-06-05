import type { Config } from "tailwindcss"
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["logos", "lucide"]),
    }),
  ],
} satisfies Config
