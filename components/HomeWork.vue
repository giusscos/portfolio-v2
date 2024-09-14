<script setup lang="ts">
type workArray = {
  text: string,
  textChars: string[],
  path: string,
  title: string
}

const textContainer = ref<HTMLElement[]>([]);
const shadowContainer = ref<HTMLElement[]>([]);

const works = ref<workArray[]>([
  {
    text: 'pcasa',
    textChars: 'pcasa'.split(''),
    path: '/work/pcasa',
    title: 'Explore pcasa project'
  },
  {
    text: 'spotify-clone',
    textChars: 'spotify-clone'.split(''),
    path: '/work/spotify-clone',
    title: 'Explore spotify-clone project'
  }
]);

function handleOnMouseEnter(el: MouseEvent) {
  const text = el.toElement.children[0] as HTMLElement;

  const shadow = el.toElement.children[1] as HTMLElement;

  const lenghtText = text.children.length;

  for (let index = 0; index < lenghtText; index++) {
    text.children[index].classList.add(`-translate-y-[300px]`);
  }

  for (let index = 0; index < lenghtText; index++) {
    shadow.children[index].classList.remove(`translate-y-[300px]`)
  }
}

function handleOnMouseLeave(el: MouseEvent) {
  const text = el.fromElement.children[0] as HTMLElement;

  const shadow = el.fromElement.children[1] as HTMLElement;

  const lenghtText = text.children.length;

  for (let index = 0; index < lenghtText; index++) {
    text.children[index].classList.remove(`-translate-y-[300px]`)
  }

  for (let index = 0; index < lenghtText; index++) {
    shadow.children[index].classList.add(`translate-y-[300px]`)
  }
}

</script>

<template>
  <section>
    <h2 class="title-medium uppercase mb-10">
      Recent works
    </h2>
    <ul class="flex flex-col gap-10">
      <li v-for="(element, index) in works" :key="'work-' + index" @mouseenter="handleOnMouseEnter"
        @mouseleave="handleOnMouseLeave" class="relative overflow-y-hidden title-big">
        <NuxtLink :to="'/'" :title="element.title" class="text">
          <div v-for="(char, idx) in element.textChars" :key="'char-anchor-' + idx" :class="`duration-[${idx * 100}ms]`"
            class="inline-block relative origin-top-left transition-300-standard">
            {{ char }}
          </div>
        </NuxtLink>
        <span class="absolute text-error inset-0">
          <div v-for="(char, idx) in element.textChars" :key="'char-shadow-' + idx" :class="`duration-[${idx * 100}ms]`"
            class="inline-block relative origin-bottom-left translate-y-[300px] transition-300-standard">
            {{ char }}
          </div>
        </span>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
