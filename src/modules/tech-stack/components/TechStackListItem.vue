<script setup lang="ts">
import { computed } from "vue"

import BorderBeam from "@/modules/shared/components/BorderBeam.vue"
import type { Tech } from "@/modules/tech-stack/types"

interface Props extends Tech {
  show: boolean
  index: number
}

const props = withDefaults(defineProps<Props>(), { color: "#22c55e" })

const delay = computed(() => `${props.index * 50}ms`)
</script>

<template>
  <li class="relative opacity-0" :class="{ 'list-item': show }">
    <a
      :href="href"
      class="group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-neutral-800 p-8 shadow-lg outline-none transition duration-700 ease-spring will-change-transform hocus:scale-105 hocus:text-[--color] hocus:shadow-sm sm:gap-4 sm:p-10 sm:hocus:scale-110"
      target="_blank"
    >
      <div class="text-[3.5rem] sm:text-[5rem]" :class="icon"></div>
      <div class="text-center text-lg sm:text-xl">{{ name }}</div>

      <BorderBeam
        class="opacity-0 transition-opacity duration-200 ease-in-out group-hocus:opacity-100"
        :size="150"
        :color-to="color"
        :color-from="color"
        :duration="4"
        inset="-2px"
      />
      <BorderBeam
        class="opacity-0 transition-opacity duration-200 ease-in-out group-hocus:opacity-100"
        :duration="4"
        :delay="2"
        :color-to="color"
        :color-from="color"
        :size="150"
        inset="-2px"
      />
    </a>
  </li>
</template>

<style scoped>
.list-item {
  animation: appear 300ms ease-in forwards;
  animation-delay: v-bind(delay);
  --color: v-bind(color);
}

@keyframes appear {
  from {
    transform: translateY(2rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
}
</style>
