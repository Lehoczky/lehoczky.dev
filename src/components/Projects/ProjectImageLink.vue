<template>
  <a class="group relative grid overflow-hidden rounded-lg" target="_blank">
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

<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue"

import BorderBeam from "../BorderBeam.vue"

interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {}

defineProps<Props>()
</script>
