<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const text = new SplitType('.stagger-words');

  text.lines?.forEach((el) => {
    el.style.lineHeight = '1.32'
    el.style.overflow = 'hidden'
  });

  text.chars?.forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(100%)'
  });

  text.chars[2].style.transformOrigin = '70% 70%'
  text.chars[2].style.position = 'relative'
  text.chars[2].style.left = '-0.2em'

  gsap.to(text.chars[2], {
    scrollTrigger: {
      // markers: true,
      trigger: '.scroll-trigger',
      start: '20% bottom',
      end: 'bottom 80%',
    },
    rotate: '45deg',
    repeat: -1,
    yoyo: true,
    ease: 'power3.inOut'
  })

  gsap.to(text.chars, {
    scrollTrigger: {
      // markers: true,
      trigger: '.scroll-trigger',
      scrub: .5,
      start: '20% bottom',
      end: 'bottom 80%',
    },
    y: 0,
    opacity: 1,
    stagger: .3,
    delay: .3,
    duration: 30,
    ease: 'expo.inOut'
  });
})
</script>

<template>
  <section class="py-40" id="about">
    <h2 class="sr-only uppercase">
      About me
    </h2>
    <div class="grid scroll-trigger">
      <p class="paragraph-big leading-none font-medium w-full lg:mx-auto stagger-words">
        Hi, 👋 I’m Giuseppe, a web developer skilled in transforming simple concepts into exceptional, immersive
        experiences. My career spans both frontend and backend development, where I leverage advanced, efficient, and
        accessible technologies. I have a particular passion for building dynamic websites using <b>Vue</b>,
        <b>Nuxt</b>, <b>WebGL</b> and <b>Supabase</b>. My approach is defined by a meticulous attention to quality,
        detail, and performance. Driven by a
        lifelong fascination with precision and a commitment to perfection, I stay current with the latest advancements
        to deliver optimal solutions tailored to any creative vision.
      </p>
    </div>
  </section>
</template>

<style scoped>
.stagger-words {
  font-kerning: none;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
}
</style>
