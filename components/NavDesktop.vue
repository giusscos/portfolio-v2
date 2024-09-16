<script setup lang="ts">
import { myScrollTo } from "~/utils/myGsap";

const routes = useNavLinks();
</script>

<template>
  <nav class="ml-auto hidden lg:block bg-bg/50 backdrop-blur-lg backdrop-saturate-200 px-4 py-2 rounded-full">
    <ul class="flex gap-8">
      <li v-for="(element, index) in routes" :key="'route-desk-' + index" class="block overflow-hidden">
        <button type="button" @click="myScrollTo(element.path)" :title="element.title"
          class="show-from-hidden font-bold text-lg uppercase text-text/50 hover:text-text transition-colors-150-standard">
          {{ element.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
