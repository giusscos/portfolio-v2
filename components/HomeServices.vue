<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = ref([
  // {
  //   title: 'Consult',
  //   desc: `In a meeting or chat, we'll discuss your project, ideas, and goals. 
  //   I'll guide you step by step through defining the structure, design, and features that best suit your needs, helping you make informed decisions. 
  //   The aim is to create a website that fully reflects your vision, optimized both aesthetically and functionally.`,
  // },
  // {
  //   title: 'Design',
  //   desc: `I will create a visual-only version of your project, allowing you to review and refine the design. 
  //   This mockup will give you a clear idea of the final look and feel of the website. 
  //   This approach ensures that the design aligns perfectly with your expectations before development begins.`,
  // },
  // {
  //   title: 'Develop',
  //   desc: `The website will be developed using the latest technologies available, ensuring optimal performance and security. 
  //   The project will be fully responsive, adapting to all devices, and accessible to every type of user providing a seamless experience across all platforms.`,
  // },
  // {
  //   title: 'Test',
  //   desc: `The website will be rigorously tested across different devices and browsers to identify and resolve any potential issues or areas that need improvement. 
  //   This process ensures that the site performs flawlessly in terms of functionality, design, and responsiveness, delivering a consistent user experience regardless of the platform.`,
  // },
  {
    title: 'Consulting',
    desc: `We will discuss your project, ideas, and goals in detail. 
    I will guide you step-by-step through defining the structure, design, and features that best align with your vision. 
    My aim is to help you make informed decisions to create a website that fully reflects your vision, optimized for both aesthetics and functionality.`,
  },
  {
    title: 'Design',
    desc: `I will provide a visual mockup of your project, allowing you to review and refine the design before development begins. 
    This mockup will give you a clear preview of the final look and feel of the website, ensuring that the design aligns perfectly with your expectations.`,
  },
  {
    title: 'Development',
    desc: `The website will be developed using the latest technologies to ensure optimal performance and security. 
    It will be fully responsive, providing a seamless experience across all devices, and designed to be accessible to all users, regardless of their platform.`,
  },
  {
    title: 'Testing',
    desc: `The website will undergo rigorous testing across various devices and browsers to identify and address any potential issues. 
    This thorough process ensures flawless performance in functionality, design, and responsiveness, delivering a consistent and high-quality user experience on every platform.`,
  },
]);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.from('.services-scroll', {
    scrollTrigger: {
      // markers: true,
      trigger: '.sercises-scroll-trigger',
      scrub: .5,
      start: '-50% center',
      end: '-20% center',
    },
    autoAlpha: 0,
    duration: 1,
    ease: 'expo.inOut'
  }).from('.services-scroll', {
    scrollTrigger: {
      // markers: true,
      trigger: '.sercises-scroll-trigger',
      scrub: .5,
      start: '-20% center',
      end: '40% center',
    },
    x: '-=100vw',
    y: '-=100vh',
    stagger: {
      each: .7,
      from: 'random',
    },
    duration: 10,
    ease: 'expo.inOut'
  });
})
</script>

<template>
  <section id="services">
    <h2 class="title-medium uppercase mb-10">
      The path
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sercises-scroll-trigger">
      <div v-for="(element, index) in services" :key="'service-' + index"
        class="services-scroll w-full h-full p-5 bg-bg border-2 border-text rounded-xl flex flex-col gap-20 overflow-hidden">
        <span class="paragraph-medium font-tanker text-error font-semibold">.0{{ index + 1 }}</span>
        <div class="grow text-right h-full flex flex-col">
          <h2 class="title-medium font-bebas">{{ element.title }}</h2>
          <p class="paragraph-small leading-6 grow text-pretty">{{ element.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-scroll {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
}
</style>
