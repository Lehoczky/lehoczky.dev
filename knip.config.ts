import type { KnipConfig } from "knip"

const config: KnipConfig = {
  ignoreDependencies: ["sharp", "@iconify-json/*"],
  project: ["src/**/*"],
  ignoreExportsUsedInFile: true,
}

export default config
