<template>
  <section class="min-h-[60vh] bg-[#1e1e1e] py-20">
    <div class="container">
      <SectionTitle :id="SECTION_TITLE_ID">My Tech Stack</SectionTitle>

      <Tabs.Root default-value="tab1">
        <Tabs.List class="relative mb-6 flex shrink-0 gap-4">
          <Tabs.Indicator
            class="absolute bottom-0 left-0 h-px w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full px-8 transition-[width,transform] duration-300"
          >
            <div
              class="absolute left-0 h-0.5 w-[--radix-tabs-indicator-size] bg-green-500 transition-[width,transform] duration-300"
            />
          </Tabs.Indicator>

          <Tabs.Trigger value="tab1" class="text-2xl">Frontend</Tabs.Trigger>
          <Tabs.Trigger value="tab2" class="text-2xl">Backend</Tabs.Trigger>
          <Tabs.Trigger value="tab3" class="text-2xl">Others</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="tab1">
          <TechStackList :techs="frontendTechs" />
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <TechStackList :techs="backendTechs" />
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <TechStackList :techs="otherTechs" />
        </Tabs.Content>
      </Tabs.Root>

      <button
        class="mt-8 inline-flex w-full items-center justify-center gap-1 rounded-2xl border-2 border-green-500 px-6 py-3 text-xl font-semibold transition duration-200 hover:bg-green-500 hover:text-black sm:hidden"
        @click="scrollToSectionTitle"
      >
        <span class="i-lucide-arrow-up text-2xl"></span>
        <span> Back to Categories</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Tabs } from "radix-vue/namespaced"

import type { Tech } from "@/types/tech"

import SectionTitle from "../SectionTitle.vue"
import TechStackList from "./TechStackList.vue"

const frontendTechs: Tech[] = [
  { href: "/", name: "Vue", icon: "i-logos-vue", color: "#42b883" },
  {
    href: "/",
    name: "Nuxt",
    icon: "i-logos-nuxt-icon",
    color: "#00DC82",
  },
  {
    href: "/",
    name: "Angular",
    icon: "i-logos-angular-icon",
    color: "#fb2fc1",
  },
  {
    href: "/",
    name: "React",
    icon: "i-logos-react",
    color: "#00D8FF",
  },
  {
    href: "/",
    name: "Next.js",
    icon: "i-logos-nextjs-icon",
    color: "#ffffff",
  },
  { href: "/", name: "Nx", icon: "i-logos-nx", color: "#96D8E9" },
  {
    href: "/",
    name: "Tailwind",
    icon: "i-logos-tailwindcss-icon",
    color: "#0ED7B5",
  },
  {
    href: "/",
    name: "TypeScript",
    icon: "i-logos-typescript-icon",
    color: "#4786cc",
  },
  {
    href: "/",
    name: "Vite",
    icon: "i-logos-vitejs",
    color: "#9665fe",
  },
  { href: "/", name: "Jest", icon: "i-logos-jest", color: "#ce5f7f" },
  {
    href: "/",
    name: "Playwright",
    icon: "i-logos-playwright",
    color: "#2ead33",
  },
  {
    href: "/",
    name: "Storybook",
    icon: "i-logos-storybook-icon",
    color: "#ff4785",
  },
]

const backendTechs: Tech[] = [
  {
    href: "/",
    name: "Python",
    icon: "i-logos-python",
    color: "#ffd545",
  },
  {
    href: "/",
    name: "Flask",
    icon: "i-logos-flask",
    color: "#ffffff",
  },
  {
    href: "/",
    name: "Swagger",
    icon: "i-logos-swagger",
    color: "#85ea2d",
  },
  {
    href: "/",
    name: "Node.js",
    icon: "i-logos-nodejs-icon",
    color: "#539e43",
  },
  {
    href: "/",
    name: "Prisma",
    icon: "i-logos-prisma",
    color: "#ffffff",
  },
  {
    href: "/",
    name: "Postgresql",
    icon: "i-logos-postgresql",
    color: "#336791",
  },
]

const otherTechs: Tech[] = [
  {
    href: "/",
    name: "Electron",
    icon: "i-logos-electron",
    color: "#47848f",
  },
  {
    href: "/",
    name: "GH Actions",
    icon: "i-logos-github-actions",
    color: "#85b3df",
  },
  {
    href: "/",
    name: "Docker",
    icon: "i-logos-docker-icon",
    color: "#2396ed",
  },
  {
    href: "/",
    name: "GraphQL",
    icon: "i-logos-graphql",
    color: "#e535ab",
  },
  { href: "/", name: "tRPC", icon: "i-logos-trpc", color: "#398ccb" },
]

const SECTION_TITLE_ID = "tech-stack"
function scrollToSectionTitle() {
  document
    .getElementById(SECTION_TITLE_ID)
    ?.scrollIntoView({ behavior: "smooth" })
}
</script>
