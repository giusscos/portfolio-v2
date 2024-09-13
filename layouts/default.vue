<script setup lang="ts"></script>

<template>
  <div>
    <header class="fixed top-0 w-full p-5 flex items-center gap-8 flex-nowrap">
      <NuxtLink to="/" class="font-tanker text-2xl text-text uppercase">
        Giusscos
      </NuxtLink>
      <nav class="ml-auto">
        <ul class="flex gap-8">
          <li class="">
            <NuxtLink to="/" class="font-bold text-lg uppercase text-text/50 hover:text-text transition duration-150 ease-in-out">
              About
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink to="/" class="font-bold text-lg uppercase text-text/50 hover:text-text transition duration-150 ease-in-out">
              Work
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>

<style scoped></style>
