<template>
  <div
    :style="{
      '--size': size,
      '--duration': duration,
      '--anchor': anchor,
      '--border-width': borderWidth,
      '--color-from': colorFrom,
      '--color-to': colorTo,
      '--delay': `-${delay}s`,
      inset,
    }"
    class="pointer-events-none absolute rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
    :class="props.class"
  />
</template>

<script setup lang="ts">
interface BorderBeamProps {
  class?: string
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
  inset?: string
}

const props = withDefaults(defineProps<BorderBeamProps>(), {
  size: 250,
  duration: 8,
  anchor: 90,
  borderWidth: 2,
  colorFrom: "#22c55e ",
  colorTo: "#86efac",
  delay: 0,
  class: undefined,
  inset: "0",
})
</script>
