<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

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

  gsap.ticker.lagSmoothing()
})
</script>

<template>
  <HomeJumbo />
  <HomeAboutMe />
  <HomeWorkV2 />
  <HomeServices />
  <HomeStartWork />
</template>

<style scoped></style>
