import type { KnipConfig } from "knip"

const config: KnipConfig = {
  entry: ["lighthouserc.cjs"],
  ignoreDependencies: ["sharp", "@iconify-json/*"],
  ignoreExportsUsedInFile: true,
  exclude: ["unresolved"],
  compilers: {
    // https://github.com/webpro-nl/knip/issues/1008#issuecomment-3207756199
    css: (text: string) =>
      [
        ...text.replaceAll("plugin", "import").matchAll(/(?<=@)import[^;]+/g),
      ].join("\n"),
  },
}

export default config
