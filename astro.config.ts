import tailwind from "@astrojs/tailwind"
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import Icons from "unplugin-icons/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://lehoczky.dev/",
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: "vue3",
        customCollections: {
          custom: FileSystemIconLoader("./src/assets/icons"),
        },
      }),
    ],
  },
})
