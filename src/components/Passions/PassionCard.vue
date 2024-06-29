<template>
  <div
    class="card group relative isolate grid overflow-hidden rounded-2xl bg-neutral-700 bg-opacity-20 p-0.5"
  >
    <div
      class="inner flex gap-8 rounded-2xl bg-neutral-800 p-10 transition-all duration-300 ease-in-out group-hover:bg-opacity-60 group-hover:backdrop-blur-3xl"
    >
      <slot></slot>
    </div>
    <div
      class="blob absolute left-0 top-0 -z-10 size-64 rounded-full bg-neutral-100 bg-opacity-50 opacity-0 blur-2xl transition-all duration-300 ease-in-out"
    ></div>
    <div
      class="fake-blob invisible absolute left-0 top-0 -z-10 size-52 rounded-full"
    ></div>
  </div>
</template>
