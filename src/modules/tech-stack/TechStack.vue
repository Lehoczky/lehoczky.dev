<script setup lang="ts">
import { Tabs } from "reka-ui/namespaced"
import { ref } from "vue"

import SectionTitle from "@/modules/shared/components/SectionTitle.vue"
import type { Tech } from "@/modules/tech-stack/types"
import IconNineDots from "~icons/custom/nine-dots"

import TechStackList from "./components/TechStackList.vue"

const frontendTechs: Tech[] = [
  {
    href: "https://vuejs.org/",
    name: "Vue",
    icon: "i-logos-vue",
    color: "#42b883",
  },
  {
    href: "https://nuxt.com/",
    name: "Nuxt",
    icon: "i-logos-nuxt-icon",
    color: "#00DC82",
  },
  {
    href: "https://angular.dev/",
    name: "Angular",
    icon: "i-logos-angular-icon",
    color: "#fb2fc1",
  },
  {
    href: "https://react.dev/",
    name: "React",
    icon: "i-logos-react",
    color: "#00D8FF",
  },
  {
    href: "https://nextjs.org/",
    name: "Next.js",
    icon: "i-logos-nextjs-icon",
    color: "#ffffff",
  },
  {
    href: "https://nx.dev/",
    name: "Nx",
    icon: "i-logos-nx",
    color: "#96D8E9",
  },
  {
    href: "https://tailwindcss.com/",
    name: "Tailwind",
    icon: "i-logos-tailwindcss-icon",
    color: "#0ED7B5",
  },
  {
    href: "https://www.typescriptlang.org/",
    name: "TypeScript",
    icon: "i-logos-typescript-icon",
    color: "#4786cc",
  },
  {
    href: "https://vitejs.dev/",
    name: "Vite",
    icon: "i-logos-vitejs",
    color: "#9665fe",
  },
  {
    href: "https://jestjs.io/",
    name: "Jest",
    icon: "i-logos-jest",
    color: "#ce5f7f",
  },
  {
    href: "https://playwright.dev/",
    name: "Playwright",
    icon: "i-logos-playwright",
    color: "#2ead33",
  },
  {
    href: "https://storybook.js.org/",
    name: "Storybook",
    icon: "i-logos-storybook-icon",
    color: "#ff4785",
  },
]

const backendTechs: Tech[] = [
  {
    href: "https://www.python.org/",
    name: "Python",
    icon: "i-logos-python",
    color: "#ffd545",
  },
  {
    href: "https://flask.palletsprojects.com/en/3.0.x/",
    name: "Flask",
    icon: "i-logos-flask",
    color: "#ffffff",
  },
  {
    href: "https://swagger.io/",
    name: "Swagger",
    icon: "i-logos-swagger",
    color: "#85ea2d",
  },
  {
    href: "https://nodejs.org/en",
    name: "Node.js",
    icon: "i-logos-nodejs-icon",
    color: "#539e43",
  },
  {
    href: "https://www.prisma.io/",
    name: "Prisma",
    icon: "i-logos-prisma",
    color: "#ffffff",
  },
  {
    href: "https://www.postgresql.org/",
    name: "Postgresql",
    icon: "i-logos-postgresql",
    color: "#336791",
  },
]

const otherTechs: Tech[] = [
  {
    href: "https://www.electronjs.org/",
    name: "Electron",
    icon: "i-logos-electron",
    color: "#47848f",
  },
  {
    href: "https://docs.github.com/en/actions",
    name: "GH Actions",
    icon: "i-logos-github-actions",
    color: "#85b3df",
  },
  {
    href: "https://www.docker.com/",
    name: "Docker",
    icon: "i-logos-docker-icon",
    color: "#2396ed",
  },
  {
    href: "https://graphql.org/",
    name: "GraphQL",
    icon: "i-logos-graphql",
    color: "#e535ab",
  },
  {
    href: "https://trpc.io/",
    name: "tRPC",
    icon: "i-logos-trpc",
    color: "#398ccb",
  },
]

const transitionContainer = ref<HTMLElement | undefined>()
function tabChange() {
  setTransitionContainerHeight(activeTabContentHeight())
  requestAnimationFrame(() => {
    setTransitionContainerHeight(activeTabContentHeight())
  })
}

function setTransitionContainerHeight(height: string) {
  transitionContainer.value!.style.height = height
}

function activeTabContentHeight() {
  const selector = '[data-state="active"] > *'
  const element = transitionContainer.value!.querySelector(selector)
  return `${element!.clientHeight}px`
}

function tabTransitionEnd() {
  transitionContainer.value!.style.height = ""
}
</script>

<template>
  <section class="min-h-[60vh] overflow-hidden bg-[#1e1e1e] py-20">
    <div class="container">
      <SectionTitle>My Tech Stack</SectionTitle>

      <Tabs.Root default-value="tab1" @update:model-value="tabChange">
        <Tabs.List class="relative mb-6 flex shrink-0 gap-4">
          <Tabs.Indicator
            class="absolute bottom-0 left-0 h-px w-[--reka-tabs-indicator-size] translate-x-[--reka-tabs-indicator-position] rounded-full px-8 transition-[width,transform] duration-300"
          >
            <div
              class="absolute left-0 h-0.5 w-[--reka-tabs-indicator-size] bg-green-500 transition-[width,transform] duration-300"
            />
          </Tabs.Indicator>

          <Tabs.Trigger
            value="tab1"
            class="flex items-center gap-1 rounded-sm text-2xl transition duration-300 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            <div class="i-lucide-monitor hidden text-xl sm:block"></div>
            <span>Frontend</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            class="flex items-center gap-1 rounded-sm text-2xl transition duration-300 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            <div class="i-lucide-server hidden text-xl sm:block"></div>
            <span>Backend</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            class="flex items-center gap-1 rounded-sm text-2xl transition duration-300 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            <IconNineDots class="hidden text-xl sm:block" />
            <span>Others</span>
          </Tabs.Trigger>
        </Tabs.List>

        <div
          ref="transitionContainer"
          class="transition-[height] duration-500"
          @transitionend="tabTransitionEnd"
        >
          <Tabs.Content value="tab1">
            <TechStackList :techs="frontendTechs" />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <TechStackList :techs="backendTechs" />
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <TechStackList :techs="otherTechs" />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  </section>
</template>
