<template>
  <h2
    class="mb-10 scroll-m-24 text-5xl tracking-tighter text-green-500 transition-[letter-spacing,opacity] duration-500 lg:mb-12 xl:mb-16"
  >
    <slot></slot>
  </h2>
</template>

<style lang="css" scoped>
.out {
  @apply !tracking-normal opacity-40;
}
</style>
