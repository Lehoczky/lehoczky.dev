<template>
  <a
    class="bg-gradient-to-r from-current to-current bg-[length:0_1px] bg-right-bottom bg-no-repeat pb-px text-white transition-[background-size] duration-300 hover:bg-[length:100%_1px] hover:bg-left-bottom hover:text-green-500 motion-reduce:transition-none"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue"

interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {}

defineProps<Props>()
</script>
