<script setup lang="ts">
export type Service = {
  id?: number | null;
  title: string;
  desc: string;
}

const services = ref<Service[]>([
  {
    title: 'Consulting',
    desc: `We will discuss your project, ideas, and goals in detail. 
    I will guide you step-by-step through defining the structure, design, and features that best align with your vision. 
    My aim is to help you make informed decisions to create a website that fully reflects your vision, optimized for both aesthetics and functionality.`,
  },
  {
    title: 'Design',
    desc: `I will provide a visual mockup of your project, allowing you to review and refine the design before development begins. 
    This mockup will give you a clear preview of the final look and feel of the website, ensuring that the design aligns perfectly with your expectations.`,
  },
  {
    title: 'Development',
    desc: `The website will be developed using the latest technologies to ensure optimal performance and security. 
    It will be fully responsive, providing a seamless experience across all devices, and designed to be accessible to all users, regardless of their platform.`,
  },
  {
    title: 'Testing',
    desc: `The website will undergo rigorous testing across various devices and browsers to identify and address any potential issues. 
    This thorough process ensures flawless performance in functionality, design, and responsiveness, delivering a consistent and high-quality user experience on every platform.`,
  },
]);

const selectedService = ref<Service>(services.value[0])

function showSelectedService(service: Service, id: number) {
  selectedService.value = { ...service, id: id + 1 }
}
</script>

<template>
  <section id="services">
    <h2 class="title-medium uppercase mb-10">
      The steps
    </h2>

    <ul class="flex flex-wrap gap-1 mb-4">
      <li v-for="(element, index) in services" :key="'step-' + index">
        <button type="button" @click="showSelectedService(element, index)" :class="{
          'bg-text text-bg': index + 1 === (selectedService.id || 1)
        }" class="block font-tanker leading-none whitespace-nowrap btn-primary border-2 border-text rounded-md px-5 py-1">
          Step <b>{{ index + 1 }}</b>
        </button>
      </li>
    </ul>

    <div
      class="service-container bg-text text-bg h-fit flex gap-6 flex-wrap md:flex-nowrap rounded-3xl p-6 md:p-12 lg:p-16">
      <span class="step-selected title-medium font-tanker text-error font-semibold row-span-full self-end w-3/12">.0{{
        selectedService.id != null ?
          selectedService.id : '1' }}</span>
      <div class="grow text-right h-full self-end flex flex-col">
        <h2 class="title-big font-bebas grow">{{ selectedService.title }}</h2>
        <p class="paragraph-medium leading-10 text-pretty">{{ selectedService.desc }}</p>
      </div>
    </div>

  </section>
</template>

<style scoped></style>
