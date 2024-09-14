<script setup lang="ts">
const socials = ref([
  {
    text: 'Git',
    path: 'https://github.com/giusscos',
    title: 'Visit my GitHub account'
  },
  {
    text: 'Lin',
    path: 'https://linkedin.com/in/giuseppe-cosenza',
    title: 'Visit my LinkedIn account'
  },
  {
    text: 'Tel',
    path: 'https://t.me/giusscos',
    title: 'Send me a message on Telegram'
  },
  {
    text: 'X',
    path: 'https://x.com/giusscos',
    title: 'Visit my X account'
  },
]);
</script>

<template>
  <ul class="flex flex-nowrap items-center gap-4 my-5">
    <li v-for="(element, index) in socials" :key="'social-' + index">
      <a :href="element.path" target="_blank" :title="element.title"
        class="font-normal text-sm uppercase text-current active:underline hover:underline underline-offset-1 transition-150-standard">
        {{ element.text }}
      </a>
    </li>
  </ul>
</template>

<style scoped></style>
