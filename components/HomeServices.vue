<script setup lang="ts">
const services = ref([
  {
    title: 'Consult',
    desc: `In a meeting or chat, we'll discuss your project, ideas, and goals. 
    I'll guide you step by step through defining the structure, design, and features that best suit your needs, helping you make informed decisions. 
    The aim is to create a website that fully reflects your vision, optimized both aesthetically and functionally.`,
  },
  {
    title: 'Design',
    desc: `I will create a visual-only version of your project, allowing you to review and refine the design. 
    This mockup will give you a clear idea of the final look and feel of the website. 
    This approach ensures that the design aligns perfectly with your expectations before development begins.`,
  },
  {
    title: 'Develop',
    desc: `The website will be developed using the latest technologies available, ensuring optimal performance and security. 
    The project will be fully responsive, adapting to all devices, and accessible to every type of user providing a seamless experience across all platforms.`,
  },
  {
    title: 'Test',
    desc: `The website will be rigorously tested across different devices and browsers to identify and resolve any potential issues or areas that need improvement. 
    This process ensures that the site performs flawlessly in terms of functionality, design, and responsiveness, delivering a consistent user experience regardless of the platform.`,
  },
]);
</script>

<template>
  <section id="services">
    <h2 class="title-medium uppercase mb-10">
      Recent works
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div v-for="(element, index) in services" :key="'service-' + index"
        class="w-full h-full p-5 border-2 border-text rounded-xl flex flex-col gap-20">
        <span class="paragraph-medium font-tanker text-error font-semibold">.0{{ index + 1 }}</span>
        <div class="grow text-right h-full flex flex-col">
          <h2 class="title-medium font-bebas">{{ element.title }}</h2>
          <p class="paragraph-small leading-6 grow">{{ element.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
