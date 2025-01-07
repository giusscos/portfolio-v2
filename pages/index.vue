<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const loading = ref(true);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 700); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  gsap.to('.loader-children', {
    duration: 0.7,
    ease: "expo.inOut",
    y: "-=100vh",
    stagger: {
      each: 0.1,
      from: 'start'
    },
    onComplete: () => { loading.value = false; }
  });
})
</script>

<template>
  <TheLoader v-if="loading" />
  <template v-else-if="!loading">
    <main class="py-20 h-full grow">
      <HomeJumbo />
      <HomeAboutMe />
      <HomeWork />
      <HomeServicesV2 />
      <HomeStartWork />
    </main>
    <TheFooter />
  </template>
</template>

<style scoped></style>
