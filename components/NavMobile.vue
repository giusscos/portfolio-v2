<script setup lang="ts">
const state = useMyState();

const menuToggle = state.menuToggle;

const routes = ref([
  {
    text: 'About',
    path: '/about',
    title: 'Visit about myself page'
  },
  {
    text: 'Work',
    path: '/work',
    title: 'Visit my works page'
  }
])

const socials = ref([
  {
    text: 'Git',
    path: 'https://github.com/giusscos',
    title: 'Visit about GitHub account'
  },
  {
    text: 'Lin',
    path: 'https://linkedin.com/in/giuseppe-cosenza',
    title: 'Visit about LinkedIn account'
  },
  {
    text: 'X',
    path: 'https://x.com/giusscos',
    title: 'Visit about x account'
  },
])

function closeMenuToggle() {
  if (!menuToggle.value) return

  menuToggle.value = false;
}
</script>

<template>
  <nav :class="{ 'translate-x-[100vw]': !menuToggle, 'translate-x-0': menuToggle }"
    class="lg:hidden fixed z-20 top-0 right-0 w-full max-w-full sm:w-fit sm:max-w-fit h-fit max-h-fit py-5 px-10 sm:rounded-l-2xl text-bg bg-text/85 backdrop-blur-lg shadow-lg transition-300-standard">

    <button type="button" @click="closeMenuToggle" class="block ml-auto btn-secondary uppercase font-tanker">
      Close
    </button>

    <ul class="flex gap-10 my-5">
      <li v-for="(element, index) in routes" :key="'route-' + index">
        <NuxtLink :to="element.path" :title="element.title"
          class="font-extrabold text-3xl uppercase text-bg/75 hover:text-bg transition-150-standard">
          {{ element.text }}
        </NuxtLink>
      </li>
    </ul>

    <span class="block text-sm font-normal">
      Socials
    </span>

    <ul class="flex flex-nowrap gap-4">
      <li v-for="(element, index) in socials" :key="'social-' + index">
        <a :href="element.path" target="_blank" :title="element.title"
          class="font-normal text-sm uppercase text-bg/75 hover:text-bg hover:underline underline-offset-1 transition-150-standard">
          {{ element.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
