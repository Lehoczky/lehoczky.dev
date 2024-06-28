<template>
  <ul
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
  >
    <TechStackListItem
      v-for="(tech, i) in techs"
      v-bind="{ ...tech, index: i }"
    ></TechStackListItem>
  </ul>
</template>

<script setup lang="ts">
import TechStackListItem from "./TechStackListItem.vue"

defineProps<{
  techs: Array<{ href: string; icon: string; name: string; color?: string }>
}>()
</script>
