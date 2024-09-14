<script setup lang="ts">
// import Lenis from 'lenis';

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time: any) {
//   console.log(time)
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf);
</script>

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
