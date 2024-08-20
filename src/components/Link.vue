<template>
  <a
    class="bg-gradient-to-r from-current to-current bg-[length:0_2px] bg-right-bottom bg-no-repeat pb-px transition-[background-size] duration-500 hover:bg-[length:100%_2px] hover:bg-left-bottom hover:text-green-500 motion-reduce:transition-none"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue"

defineProps</* @vue-ignore */ AnchorHTMLAttributes>()
</script>
