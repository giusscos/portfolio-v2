<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.startw-scroll', {
    scrollTrigger: {
      // markers: true,
      trigger: '.startw-scroll-trigger',
      start: 'top center',
      end: 'center center',
      scrub: .5,
    },
    color: '#111',
    ease: 'expo.inOut'
  });
})
</script>

<template>
  <section class="py-80">
    <div class="grid place-content-center startw-scroll-trigger">
      <h2 class="title-medium text-center">
        <!-- Let's start talking about your <b class="startw-scroll">idea</b>! -->
        Let’s start exploring your concept and turning it into <b class="startw-scroll">reality</b>!
      </h2>
      <a href="mailto:hello@giusscos.com" target="_blank" title="Email me and let's start work on your idea"
        class="paragraph-medium font-bebas underline lg:no-underline hover:underline [&_i]:hover:rotate-0 flex justify-center items-center">
        Email me
        <i class="block w-7 h-7 sm:w-10 sm:h-10 aspect-square rotate-45 transition-transform-300-standard">
          <IconArrowLink />
        </i>
      </a>
    </div>
  </section>
</template>

<style scoped></style>
