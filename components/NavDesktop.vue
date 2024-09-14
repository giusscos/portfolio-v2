<script setup lang="ts"></script>

<template>
  <nav class="ml-auto hidden lg:block bg-bg/50 backdrop-blur-lg backdrop-saturate-200 px-4 py-2 rounded-full">
    <ul class="flex gap-8">
      <li class="">
        <NuxtLink to="#about"
          class="font-bold text-lg uppercase text-text/50 hover:text-text transition-150-standard">
          About
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="#works"
          class="font-bold text-lg uppercase text-text/50 hover:text-text transition-150-standard">
          Works
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="#services"
          class="font-bold text-lg uppercase text-text/50 hover:text-text transition-150-standard">
          Services
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
