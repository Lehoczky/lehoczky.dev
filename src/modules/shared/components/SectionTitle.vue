<template>
  <h2
    class="mb-10 inline-block scroll-m-24 bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-5xl tracking-tighter text-transparent transition-[letter-spacing,opacity] duration-500 lg:mb-12 xl:mb-16"
  >
    <slot></slot>
  </h2>
</template>

<style lang="css" scoped>
.out {
  @apply !tracking-normal opacity-40;
}
</style>
