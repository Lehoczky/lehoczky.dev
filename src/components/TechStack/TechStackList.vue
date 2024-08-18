<template>
  <ul
    ref="root"
    class="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  >
    <TechStackListItem
      v-for="(tech, i) in techs"
      v-bind="{ ...tech, index: i, show: showItems }"
      :key="tech.name"
    ></TechStackListItem>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import type { Tech } from "@/types/tech"

import TechStackListItem from "./TechStackListItem.vue"

defineProps<{
  techs: Tech[]
}>()

const showItems = ref(false)
const root = ref<HTMLElement | undefined>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        showItems.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.075 },
  )

  if (root.value) {
    observer.observe(root.value)
  }
})
</script>
