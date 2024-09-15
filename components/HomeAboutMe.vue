<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const text = new SplitType('.stagger-words');

  text.words?.forEach((el) => el.style.opacity = '0.2');

  gsap.to(text.words, {
    scrollTrigger: {
      trigger: '.scroll-trigger',
      // pin: true,
      // markers: true,
      scrub: 3,
      start: '20% bottom',
      end: 'bottom 80%',
    },
    opacity: 1,
    stagger: 2,
    delay: 1,
    duration: 5,
    ease: 'expo.inOut'
  });
})
</script>

<template>
  <section class="py-40" id="about">
    <h2 class="sr-only uppercase">
      About me
    </h2>
    <div class="grid place-content-center scroll-trigger">
      <p class="paragraph-medium font-medium w-full lg:px-20 stagger-words">
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
