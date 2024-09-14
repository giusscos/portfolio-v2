<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.title', {
    duration: 3,
    ease: "expo.inOut",
    autoAlpha: 0,
    y: '+=200%',
    stagger: {
      each: 0.1,
    },
  })
})
</script>

<template>
  <section id="home">
    <h2 class="title-big leading-none">
      <!-- Frontend Developer <br> <b>Freelancer</b> -->
      <span class="inline-block overflow-hidden">
        <div class="title">Frontend</div>
      </span> <span class="inline-block overflow-hidden">
        <div class="title">Developer</div>
      </span>
      <span class="inline-block overflow-hidden">
        <div class="title"><b>Freelancer</b></div>
      </span>
    </h2>
    <p class="paragraph-small leading-none w-2/3 lg:w-3/5 overflow-hidden">
      <span class="inline-block title">
        Create websites with a focus on stunning animations, details, and user interactions.
      </span>
    </p>
  </section>
</template>

<style scoped></style>
