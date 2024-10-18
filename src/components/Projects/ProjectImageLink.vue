<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue"

import BorderBeam from "../BorderBeam.vue"

defineProps</* @vue-ignore */ AnchorHTMLAttributes>()
</script>

<template>
  <a
    class="group relative grid overflow-hidden rounded-lg transition duration-700 ease-spring will-change-transform hover:scale-102 xl:hover:scale-105"
    target="_blank"
  >
    <slot></slot>
    <BorderBeam
      class="opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
    />
    <BorderBeam
      class="opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
      :delay="4"
    />
  </a>
</template>
