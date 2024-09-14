<script setup lang="ts">
const state = useMyState();

const menuToggle = state.menuToggle;

const time = ref<string>(`${new Date().getHours()}:${new Date().getMinutes()}`);

const routes = ref([
  {
    text: 'About',
    path: '#about',
    title: 'Visit about myself page'
  },
  {
    text: 'Work',
    path: '#work',
    title: 'Visit my works page'
  }
])

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
])

function closeMenuToggle() {
  if (!menuToggle.value) return

  menuToggle.value = false;
}

onMounted(() => {
  setInterval(() => {
    time.value = `${new Date().getHours()}:${new Date().getMinutes()}`;
  }, 10 * 1000);
})
</script>

<template>
  <nav :class="{ 'translate-x-[100vw]': !menuToggle, 'translate-x-0': menuToggle }"
    class="lg:hidden fixed z-20 top-0 right-0 w-full max-w-full sm:w-fit sm:max-w-fit h-fit max-h-fit py-5 px-5 sm:rounded-l-2xl text-bg bg-text/85 backdrop-blur-lg backdrop-saturate-200 shadow-lg transition-300-standard">

    <button type="button" @click="closeMenuToggle" class="block ml-auto btn-secondary uppercase font-tanker">
      Close
    </button>

    <ul class="flex gap-10 my-5">
      <li v-for="(element, index) in routes" :key="'route-' + index">
        <NuxtLink :to="element.path" :title="element.title"
          class="font-extrabold font-bebas text-5xl uppercase text-bg/75 hover:text-bg transition-150-standard">
          {{ element.text }}
        </NuxtLink>
      </li>
    </ul>

    <span class="block text-sm font-normal">
      Socials
    </span>

    <TheSocials />

    <span class="block text-sm font-normal">
      Other
    </span>

    <ul class="flex items-center gap-6">
      <li>
        <a href="mailto:giusscos@icloud.com" target="_blank" title="Send me an email"
          class="font-normal text-sm text-bg/75 hover:text-bg hover:underline underline-offset-1 transition-150-standard">
          giusscos@icloud.com
        </a>
      </li>
      <li class="font-normal text-sm text-bg cursor-wait">
        Local Time: {{ time }}
      </li>
    </ul>


  </nav>
</template>

<style scoped></style>
