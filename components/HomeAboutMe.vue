<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const text = new SplitType('.stagger-words');

  text.lines?.forEach((el) => {
    el.style.lineHeight = '1.3'
    el.style.overflow = 'hidden'
  });

  text.chars?.forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(100%)'
  });

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
      <p class="paragraph-big leading-none font-medium w-full lg:w-10/12 lg:mx-auto stagger-words">
        I'm Giuseppe, a web and mobile freelance developer with over 2 years of professional experience. I'm specialized
        in
        front-end development using <b>Vue</b>, <b>Nuxt</b>, <b>React</b>, <b>Next</b> and <b>React Native</b>. On the
        back end, I primarily
        use Laravel (PHP) and am currently exploring serverless solutions like <b>Supabase</b>, which I find highly
        promising.
        <br>
        I'm open to exciting collaborations and forward-thinking projects 🚀
      </p>
    </div>
  </section>
</template>

<style scoped>
.stagger-words {
  font-kerning: none;
}
</style>
