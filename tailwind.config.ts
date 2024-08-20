import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"
import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      scale: {
        102: "1.02",
      },
      transitionTimingFunction: {
        spring:
          "linear(0, 0.0022 0.41%, 0.0094, 0.0215, 0.0379 1.77%, 0.0853 2.73%, 0.1537 3.77%, 0.3063 5.63%, 0.646 9.27%, 0.7829, 0.9054 12.36%, 1.0067, 1.0886 15.36%, 1.121, 1.1486, 1.1717 17.54%, 1.1912, 1.206 19.09%, 1.2166 19.9%, 1.223 20.86%, 1.2234 21.86%, 1.2181 22.9%, 1.2064 24.04%, 1.1908 25.13%, 1.1701 26.31%, 1.0571 31.81%, 1.0302 33.26%, 1.0081 34.63%, 0.9867, 0.9703, 0.959 39.4%, 0.9523 41.03%, 0.9499 43.12%, 0.9537, 0.962 47.76%, 0.9869 53.17%, 0.9976 55.89%, 1.0059 58.89%, 1.0103 61.94%, 1.0104 66.8%, 1.0008 76.93%, 0.9979 82.39%, 1.0001 99.97%)",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
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
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
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
