<template>
  <li class="list-item opacity-0">
    <a
      :href="href"
      class="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-neutral-800 p-10 shadow-xl transition-colors duration-200 hover:border-green-500 hover:text-green-500"
    >
      <div class="text-[5rem]" :class="icon"></div>
      <div class="text-xl">{{ name }}</div>
    </a>
    <div class="animated-border-box-glow -z-10"></div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  href: string
  name: string
  icon: string
  index: number
}>()

const delay = computed(() => `${props.index * 50}ms`)
</script>

<style scoped>
.list-item {
  animation: appear 300ms ease-in forwards;
  animation-delay: v-bind(delay);
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
