<script setup lang="ts">
import gsap from 'gsap';
import { myScrollTo } from '~/utils/myGsap';

const state = useMyState();

const menuToggle = state.menuToggle;

function openMenuToggle() {
  toggleMenuAnimation(menuToggle.value)

  menuToggle.value = true;
}

function scrollAndCloseMenu() {
  myScrollTo(0)

  if (!menuToggle.value) return

  toggleMenuAnimation(menuToggle.value);

  menuToggle.value = false;
}

onMounted(() => {
  gsap.from('.show-from-hidden', {
    duration: 3,
    ease: "expo.inOut",
    y: "+=150%",
    stagger: .3,
    delay: 0.7
  });
})
</script>

<template>
  <header class="fixed z-40 top-0 w-full p-5 flex items-center gap-8 flex-nowrap">
    <button type="button" @click="scrollAndCloseMenu"
      class="font-bebas bg-bg/50 backdrop-blur-lg backdrop-saturate-200 rounded-full px-4 pt-2 pb-1 text-4xl text-text overflow-hidden">
      <span class="show-from-hidden">Giuss<b>cos</b></span>
    </button>

    <NavDesktop />

    <button type="button" :aria-expanded="menuToggle" aria-controls="navMenu" @click="openMenuToggle" id="menuToggleButton"
      class="lg:hidden z-30 ml-auto btn-primary uppercase font-tanker overflow-hidden">
      <span class="show-from-hidden">Menu</span>
    </button>

    <NavMobile />
  </header>
</template>

<style>
.show-from-hidden {
  display: inline-block;
}
</style>
