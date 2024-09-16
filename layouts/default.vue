<script setup lang="ts">
import gsap from 'gsap';

const loading = ref(true);

onMounted(() => {
  gsap.to('.loader-children', {
    duration: 1,
    ease: "expo.inOut",
    y: "-=100vh",
    x: -500,
    rotate: '-90deg',
    stagger: .3,
    onComplete: () => { loading.value = false; }
  });
})
</script>

<template>
  <div class="bg-bg text-text min-h-screen h-full flex flex-col">
    <TheLoader v-if="loading" />
    <template v-else-if="!loading">
      <TheHeader />
      <main class="py-20 px-5 h-full grow">
        <slot />
      </main>
      <TheFooter />
    </template>
  </div>
</template>

<style scoped></style>
