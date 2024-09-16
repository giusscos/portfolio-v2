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
        <!-- I'm Giuseppe, a web and mobile freelance developer with over 2 years of professional experience. I'm specialized
        in
        front-end development using <b>Vue</b>, <b>Nuxt</b>, <b>React</b>, <b>Next</b> and <b>React Native</b>. On the
        back end, I primarily
        use Laravel (PHP) and am currently exploring serverless solutions like <b>Supabase</b>, which I find highly
        promising.
        <br>
        I'm open to exciting collaborations and forward-thinking projects 🚀 -->

        <!-- Hi 👋 I’m Giuseppe, a web and mobile freelance developer. I specialise in frontend development
        using <b>Vue</b>, <b>Nuxt</b>, <b>React</b>, <b>Next</b> and <b>React Native</b>. On the back end, I primarily
        use Laravel (PHP) and am currently
        exploring serverless solutions like
        <b>Supabase</b>, which I find highly promising. I'm open to exciting collaborations and forward-thinking projects. 🚀 -->

        Hi 👋 I’m Giuseppe, a web developer with the ability to transform a simple concept into a
        remarkable and immersive experience. Throughout my career, I have consistently worked across both frontend and
        backend development, employing cutting-edge, efficient, and accessible technologies. Among these, I have a
        particular affinity for crafting websites using <b>Vue</b>, <b>Nuxt</b>, <b>WebGL</b> and <b>Supabase</b>. In
        designing such experiences, I
        am meticulous in my attention to quality, detail, and performance. From a young age, I have harbored a deep
        fascination with precision and an innate drive for perfectionism. I take pride in staying abreast of the latest
        advancements and in proposing optimal solutions tailored to any creative vision 🚀 
      </p>
    </div>
  </section>
</template>

<style scoped>
.stagger-words {
  font-kerning: none;
}
</style>
