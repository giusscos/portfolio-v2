<script setup lang="ts">
import { myScrollTo } from "~/utils/myGsap";

const routes = useNavLinks();

const state = useMyState();

const menuToggle = state.menuToggle;

function closeMenuToggle(id?: string) {
  if (!menuToggle.value) return

  toggleMenuAnimation(menuToggle.value)

  menuToggle.value = false;
  
  if (!id) return;

  myScrollTo(id)
}
</script>

<template>
  <nav id="navMenu"
    class="lg:hidden invisible translate-x-[100%] fixed z-20 top-0 right-0 w-full max-w-full sm:w-fit sm:max-w-fit h-fit max-h-fit p-5 sm:px-10 md:px-14 lg:px-16 sm:rounded-l-2xl text-bg bg-text/85 backdrop-blur-lg backdrop-saturate-200 shadow-lg transition-transform-300-standard">

    <button type="button" aria-controls="navMenu" :aria-expanded="menuToggle" @click="closeMenuToggle()" class="block ml-auto btn-secondary uppercase font-tanker">
      <span>Close</span>
    </button>

    <ul class="flex flex-col gap-y-2 md:gap-y-8 my-5" id="ulRoutes">
      <li v-for="(element, index) in routes" :key="'route-' + index" class="overflow-hidden">
        <button type="button" @click="closeMenuToggle(element.path)" :title="element.title"
          class="font-extrabold font-bebas text-5xl text-bg/75 hover:text-bg translate-y-[150%] transition-color-150-standard">
          {{ element.text }}
        </button>
      </li>
    </ul>

    <p class="text-sm font-normal overflow-hidden">
      <span class="block translate-y-[150%]">
        Socials
      </span class="block">
    </p>

    <TheSocials isMenu="true" class="mb-4" />
  </nav>
</template>

<style scoped></style>
