<script setup lang="ts"></script>

<template>
  <section class="py-40">
    <h2 class="uppercase title-medium">
      About me
    </h2>
    <div class="grid grid-cols-12">
      <p class="text-base sm:text-lg lg:text-xl leading-none col-span-12 sm:col-span-8 lg:col-span-6">
        I'm Giuseppe, a web and mobile freelance developer with over 2 years of professional experience. I'm specialized
        in
        front-end development using <b>Vue.js, Nuxt.js, Swift, React, and React Native</b>. On the back end, I primarily
        use Laravel (PHP) and am currently exploring serverless solutions like <b>Supabase</b>, which I find highly
        promising.
        <br>
        I'm open to exciting collaborations and forward-thinking projects 🚀
      </p>
      <NuxtLink to="/about"
        class="btn-without-bg sm:col-span-4 lg:col-span-6 uppercase text-base sm:text-lg lg:text-2xl self-center">
        More about me 🫣
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
