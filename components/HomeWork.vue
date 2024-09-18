<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type workArray = {
  text: string,
  category?: string,
  stack?: string,
  desc?: string,
  imageUrl?: string,
  url: string,
  title: string
}

const section = ref<HTMLElement>();
const hScroll = ref<HTMLElement>();

const works = ref<workArray[]>([
  {
    text: 'pcasa',
    category: 'e-commerce',
    stack: 'Nuxt - Supabase',
    imageUrl: '/images/pcasa_thumb.webp',
    url: 'https://pcasa.it',
    title: 'Explore pcasa project'
  },
  {
    text: 'spotify clone (concept)',
    category: 'app-clone',
    stack: 'Vue',
    imageUrl: '/images/spotify_clone_thumb.webp',
    url: 'https://giusscos-spotify.netlify.app',
    title: 'Explore spotify-clone project'
  },
]);

onMounted(() => {
  if (!hScroll.value || !section.value) return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.to('.color-change', {
    background: '#111',
    duration: 0.5,
    scrollTrigger: {
      trigger: '.color-change',
      start: 'center center',
      end: () => '+=500',
      scrub: 0.5,
      pin: true,
    },
  }).to('.horizontal-scroll', {
    x: -(hScroll.value.clientWidth - section.value.clientWidth),
    duration: 1,
    scrollTrigger: {
      // markers: true,
      trigger: '.horizontal-scroll',
      start: 'center center',
      end: 'bottom center',
      scrub: 1,
      pin: true,
    },
  }).to('.color-change-revert', {
    background: '#f0f0f0',
    duration: 0.5,
    scrollTrigger: {
      trigger: '.color-change-revert',
      start: 'center center',
      end: () => '+=500',
      scrub: 0.5,
      pin: true,
    },
  });

});

</script>

<template>
  <section id="works" class="px-0 overflow-hidden" ref="section">
    <div class="w-screen h-screen color-change"></div>

    <div class="w-max h-screen pl-52 flex items-center gap-10 lg:gap-20 horizontal-scroll bg-text text-bg" ref="hScroll">
      <h2 class="title-medium shrink-0">
        Recent works
      </h2>

      <ul class="py-10 px-20 flex items-center gap-10 lg:gap-20">
        <li v-for="(element, index) in works" :key="'work-' + index" ref="stickyStack"
          class="relative w-full min-h-[70vh] lg:min-h-[80vh] h-full max-h-[70vh] lg:max-h-[80vh] aspect-video rounded-xl lg:rounded-3xl my-5 overflow-hidden">
          <img v-if="element.imageUrl" :src="element.imageUrl" :alt="'Thumbnail website ' + element.text"
            class="block w-full h-full object-cover object-center" />

          <div
            class="absolute bottom-0 left-0 right-0 h-4/12 flex flex-col justify-start items-start p-5 text-bg bg-gradient-to-b from-transparent via-black/85 to-black [&_i]:hover:rotate-0">
            <a :href="element.url" target="_blank" :title="element.title" class="absolute inset-0">
              <span class="sr-only">{{ element.text }}</span>
            </a>
            <h3 :title="element.title" class="font-bebas title-medium">
              {{ element.text }}
              <i class="inline-block align-middle w-10 lg:w-20 h-10 lg:h-20 aspect-square lg:rotate-45 transition-transform-150-standard">
                <IconArrowLink />
              </i>
            </h3>
            <!-- <p class="paragraph-small">{{ element.desc }}</p> -->
          </div>
        </li>
      </ul>
    </div>

    <div class="w-screen h-screen bg-text color-change-revert"></div>
  </section>
</template>

<style scoped></style>
