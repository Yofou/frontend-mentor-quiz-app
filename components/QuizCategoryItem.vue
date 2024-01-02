<template>
  <NuxtLink class="bg-pure-white dark:bg-navy heading-s font-medium transition-colors text-dark-navy dark:text-pure-white p-3 lg:p-5 rounded-[.75rem] sm:rounded-[1.5rem] items-center flex gap-4 sm:gap-8 w-full shadow-quiz-category dark:shadow-quiz-category-dark" :to="props.href">
    <slot /> 
  </NuxtLink>
</template>

<script setup lang="ts">
///// props/emits /////
const props = defineProps<{
  href?: string;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
