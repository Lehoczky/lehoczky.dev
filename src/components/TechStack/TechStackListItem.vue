<template>
  <li class="relative opacity-0" :class="{ 'list-item': show }">
    <a
      :href="href"
      class="group flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-neutral-800 p-10 shadow-xl transition-colors duration-200 hover:text-[--color]"
      target="_blank"
    >
      <div class="text-[5rem]" :class="icon"></div>
      <div class="text-xl">{{ name }}</div>

      <BorderBeam
        class="opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
        :size="150"
        :color-to="color"
        :color-from="color"
        :duration="4"
      />
      <BorderBeam
        class="opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
        :duration="4"
        :delay="2"
        :color-to="color"
        :color-from="color"
        :size="150"
      />
    </a>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue"

import type { Tech } from "@/types/tech"

import BorderBeam from "../BorderBeam.vue"

interface Props extends Tech {
  show: boolean
  index: number
}

const props = withDefaults(defineProps<Props>(), { color: "#22c55e" })

const delay = computed(() => `${props.index * 50}ms`)
</script>

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
