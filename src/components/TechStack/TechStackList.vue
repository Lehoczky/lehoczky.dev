<template>
  <ul
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
  >
    <TechStackListItem
      v-for="(tech, i) in techs"
      v-bind="{ ...tech, index: i }"
      :key="tech.name"
    ></TechStackListItem>
  </ul>
</template>

<script setup lang="ts">
import type { Tech } from "@/types/tech"

import TechStackListItem from "./TechStackListItem.vue"

defineProps<{
  techs: Tech[]
}>()
</script>
