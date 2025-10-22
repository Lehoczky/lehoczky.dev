<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue"

defineProps</* @vue-ignore */ AnchorHTMLAttributes>()
</script>

<template>
  <a
    class="rounded-xs bg-linear-to-r from-current to-current bg-size-[0_2px] bg-bottom-right bg-no-repeat pb-px transition-[background-size] duration-500 hover:bg-size-[100%_2px] hover:bg-bottom-left focus-visible:bg-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-0 focus-visible:ring-offset-neutral-900 hocus:text-green-500 motion-reduce:transition-none"
  >
    <slot />
  </a>
</template>
