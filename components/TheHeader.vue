<script setup lang="ts">
const state = useMyState();

const menuToggle = state.menuToggle;

function openMenuToggle() {
  menuToggle.value = true;
}

function closeMenuToggle() {
  myScrollTo(0)

  if (!menuToggle.value) return

  menuToggle.value = false;
}
</script>

<template>
  <header class="fixed z-40 top-0 w-full p-5 flex items-center gap-8 flex-nowrap">
    <button type="button" @click="closeMenuToggle"
      class="font-bebas bg-bg/50 backdrop-blur-lg backdrop-saturate-200 rounded-full px-4 pt-2 pb-1 text-4xl text-text uppercase">
      Giusscos
    </button>

    <NavDesktop />

    <button type="button" @click="openMenuToggle"
      :class="{ 'translate-x-[400px]': menuToggle, 'translate-x-0': !menuToggle }"
      class="lg:hidden z-30 ml-auto btn-primary uppercase font-tanker">
      Menu
    </button>
    <NavMobile />
  </header>
</template>

<style scoped></style>
