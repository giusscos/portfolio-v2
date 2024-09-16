<script setup lang="ts"></script>

<template>
  <div
    class="loader grid auto-cols-auto h-screen overflow-hidden absolute inset-0 z-50">
    <div class="loader-children flex justify-center items-center origin-top-left bg-text h-full w-full scale-125"
      v-for="(el, i) in 5" :key="'div' + i">
      <span class="title-big font-semibold text-bg -translate-x-1/2">
        Welcome
      </span>
    </div>
  </div>
</template>


<style scoped></style>
