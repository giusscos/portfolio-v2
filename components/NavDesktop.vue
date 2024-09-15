<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const routes = useNavLinks();

function scrollTo(id: string) {
  if (!id) return;

  gsap.to(window, {
    duration: 2.5,
    ease: "expo.inOut",
    scrollTo: {
      y: id,
      offsetY: 50,
    },
  });
}
</script>

<template>
  <nav class="ml-auto hidden lg:block bg-bg/50 backdrop-blur-lg backdrop-saturate-200 px-4 py-2 rounded-full">
    <ul class="flex gap-8">
      <li v-for="(element, index) in routes" :key="'route-desk-' + index" class="block overflow-hidden">
        <button type="button" @click="scrollTo(element.path)" :title="element.title"
          class="lg:show-from-hidden font-bold text-lg uppercase text-text/50 hover:text-text transition-colors duration-150 ">
          {{ element.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
