import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"
import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      animation: {
        appear: "appear 300ms ease-out",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["logos", "lucide", "bxl"]),
    }),
  ],
} satisfies Config
