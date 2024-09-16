<script setup lang="ts">
import { gsap } from 'gsap';
import SplitType from 'split-type';

onMounted(() => {
  const tl = gsap.timeline()
  const text = new SplitType('.jumbo-stagger-words');
  const lines = new SplitType('.jumbo-stagger-lines');

  text.lines?.forEach((el) => {
    el.style.overflow = 'hidden'
  });

  lines.lines?.forEach((el) => {
    el.style.overflow = 'hidden'
  });

  tl.from(text.words, {
    y: '+=100%',
    opacity: 0,
    stagger: .3,
    duration: 1.5,
    ease: 'expo.inOut'
  });

  tl.from(lines.words, {
    y: '+=100%',
    opacity: 0,
    stagger: {
      each: .3,
      grid: 'auto',
      axis: 'y'
    },
    duration: 1,
    ease: 'expo.inOut'
  }, '-=0.5');

})
</script>

<template>
  <section id="home" class="h-screen py-0">
    <h2 class="title-big jumbo-stagger-words">
      <!-- Frontend Developer <br> <b>Freelancer</b> -->
      <b>Freelance</b> Frontend Developer
    </h2>
    <p class="paragraph-small leading-none w-2/3 lg:w-3/5 jumbo-stagger-lines overflow-hidden">
      <!-- Create websites with a focus on stunning animations, details, and user interactions. -->
      Create websites with breathtaking animations, meticulous attention to detail, and exceptional user interactions.
    </p>
  </section>
</template>

<style scoped>
.jumbo-stagger-words,
.jumbo-stagger-lines {
  font-kerning: none;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
}
</style>