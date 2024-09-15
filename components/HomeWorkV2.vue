<script setup lang="ts">
type workArray = {
  text: string,
  imageUrl?: string,
  url: string,
  title: string
}

const stickyStack = ref<HTMLElement[]>();

const works = ref<workArray[]>([
  {
    text: 'pcasa',
    imageUrl: '/images/pcasa_thumb.webp',
    url: 'https://pcasa.it',
    title: 'Explore pcasa project'
  },
  {
    text: 'spotify clone (concept)',
    imageUrl: '/images/spotify_clone_thumb.webp',
    url: 'https://giusscos-spotify.netlify.app',
    title: 'Explore spotify-clone project'
  },
]);

function handleStickyPositionTop() {
  if (stickyStack.value?.length == 0 || !stickyStack.value) return;

  const elements = stickyStack.value;

  elements.forEach((element, idx) => {
    element.style.top = (10 + (idx * 2)) + 'rem';
    element.style.marginBottom = (4 - (idx * 2)) + 'rem';
  });
}

onMounted(() => {
  handleStickyPositionTop();
})

</script>

<template>
  <section id="works">
    <h2 class="title-medium uppercase mb-10">
      Recent works
    </h2>
    <ul class="block sticky top-0 left-0">
      <li v-for="(element, index) in works" :key="'work-' + index" ref="stickyStack"
        class="bg-bg border-2 border-text rounded-3xl p-3 lg:p-5 flex flex-col gap-1 lg:gap-4 sticky left-0 [&_i]:hover:rotate-0">
        <a :href="element.url" target="_blank" :title="element.title" class="absolute inset-0">
          <span class="sr-only">{{ element.text }}</span>
        </a>
        <div class="flex items-center w-full gap-6">
          <p :href="element.url" target="_blank" :title="element.title"
            class="font-bebas text-xl lg:text-2xl w-full flex justify-start items-center">
            {{ element.text }}
            <i class="block w-6 h-6 lg:w-8 lg:h-8 aspect-square rotate-45 transition-transform-150-standard">
              <IconArrowLink />
            </i>
          </p>
        </div>
        <img v-if="element.imageUrl" :src="element.imageUrl" :alt="'Thumbnail website ' + element.text"
          class="w-full aspect-video rounded-2xl" />
        <div v-if="!element.imageUrl" class="w-full aspect-video bg-gray-300 rounded-lg"></div>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
