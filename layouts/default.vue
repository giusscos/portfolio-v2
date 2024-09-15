<script setup lang="ts"></script>

<template>
  <div class="bg-bg text-text min-h-screen flex flex-col">
    <TheHeader />
    <main class="py-20 px-5 grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped></style>
