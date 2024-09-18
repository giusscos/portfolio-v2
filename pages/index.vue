<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const loading = ref(true);

onMounted(() => {
  // myScrollTo(0);

  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    // console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 500)
  })

  gsap.ticker.lagSmoothing(0)

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
      <HomeServices />
      <HomeStartWork />
    </main>
    <TheFooter />
  </template>
</template>

<style scoped></style>
