<script setup lang="ts"></script>

<template>
  <div class="bg-bg text-text min-h-screen flex flex-col">
    <TheHeader />
      <main class="py-20 grow">
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>

<style scoped></style>
