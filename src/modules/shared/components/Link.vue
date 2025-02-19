<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue"

defineProps</* @vue-ignore */ AnchorHTMLAttributes>()
</script>

<template>
  <a
    class="rounded-sm bg-gradient-to-r from-current to-current bg-[length:0_2px] bg-right-bottom bg-no-repeat pb-px transition-[background-size] duration-500 hover:bg-[length:100%_2px] hover:bg-left-bottom focus-visible:bg-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-0 focus-visible:ring-offset-neutral-900 hocus:text-green-500 motion-reduce:transition-none"
  >
    <slot />
  </a>
</template>
