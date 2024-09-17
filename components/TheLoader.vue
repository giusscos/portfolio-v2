<script setup lang="ts"></script>

<template>
  <div
    class="loader grid grid-cols-5 h-screen overflow-hidden absolute inset-0 z-50">
    <div class="loader-children flex justify-center items-center origin-center h-full w-full bg-text"
      v-for="(el, i) in 5" :key="'div' + i">
    </div>
  </div>
</template>


<style scoped></style>
