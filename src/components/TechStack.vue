<template>
  <div class="container">
    <SectionTitle>My Tech Stack</SectionTitle>

    <Tabs.Root default-value="tab1">
      <Tabs.List class="relative mb-6 flex shrink-0 gap-4">
        <Tabs.Indicator
          class="absolute bottom-0 left-0 h-px w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full px-8 transition-[width,transform] duration-300"
        >
          <div
            class="absolute left-0 h-0.5 w-[--radix-tabs-indicator-size] bg-green-300 transition-[width,transform] duration-300"
          />
        </Tabs.Indicator>

        <Tabs.Trigger value="tab1" class="text-2xl">Frontend</Tabs.Trigger>
        <Tabs.Trigger value="tab2" class="text-2xl">Backend</Tabs.Trigger>
        <Tabs.Trigger value="tab3" class="text-2xl">Others</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <TechStackList
          :techs="[
            { href: '/', name: 'Vue', icon: 'i-logos-vue' },
            { href: '/', name: 'Nuxt', icon: 'i-logos-nuxt-icon' },
            { href: '/', name: 'Angular', icon: 'i-logos-angular-icon' },
            { href: '/', name: 'React', icon: 'i-logos-react' },
            { href: '/', name: 'Next.js', icon: 'i-logos-nextjs-icon' },
            { href: '/', name: 'Nx', icon: 'i-logos-nx' },
            { href: '/', name: 'Tailwind', icon: 'i-logos-tailwindcss-icon' },
            {
              href: '/',
              name: 'TpeScript',
              icon: 'i-logos-typescript-icon',
            },
            { href: '/', name: 'Vite', icon: 'i-logos-vitejs' },
            { href: '/', name: 'Jest', icon: 'i-logos-jest' },
            { href: '/', name: 'Playwright', icon: 'i-logos-playwright' },
            { href: '/', name: 'Storybook', icon: 'i-logos-storybook-icon' },
          ]"
        />
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <TechStackList
          :techs="[
            { href: '/', name: 'Python', icon: 'i-logos-python' },
            { href: '/', name: 'Flask', icon: 'i-logos-flask' },
            { href: '/', name: 'Swagger', icon: 'i-logos-swagger' },
            { href: '/', name: 'Node.js', icon: 'i-logos-nodejs-icon' },
            { href: '/', name: 'Prisma', icon: 'i-logos-prisma' },
            { href: '/', name: 'Postgresql', icon: 'i-logos-postgresql' },
          ]"
        />
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <TechStackList
          :techs="[
            { href: '/', name: 'Electron', icon: 'i-logos-electron' },
            {
              href: '/',
              name: 'GH Actions',
              icon: 'i-logos-github-actions',
            },
            { href: '/', name: 'Docker', icon: 'i-logos-docker-icon' },
            { href: '/', name: 'GraphQL', icon: 'i-logos-graphql' },
            { href: '/', name: 'tRPC', icon: 'i-logos-trpc' },
          ]"
        />
      </Tabs.Content>
    </Tabs.Root>
  </div>
</template>

<script setup lang="ts">
import { Tabs } from "radix-vue/namespaced"

import SectionTitle from "./SectionTitle.vue"
import TechStackList from "./TechStackList.vue"
</script>
