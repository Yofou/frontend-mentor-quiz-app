<template>
  <main class="max-w-[72.3125rem] w-full justify-self-center mt-[5.31rem] grid grid-rows-[max-content,1fr] lg:grid-rows-1 grid-cols-1 lg:grid-cols-[max-content,1fr] gap-10 lg:gap-[8.19rem]">
    <section class="flex flex-col">
      <h2 class="heading-l font-light text-dark-navy dark:text-pure-white">Quiz completed</h2>
      <h3 class="heading-l font-bold text-dark-navy dark:text-pure-white">You scored...</h3>
    </section> 

    <section class="flex flex-col gap-4 sm:gap-8 pb-12">
       <div class="p-8 sm:p-12 bg-pure-white dark:bg-navy rounded-[1.5rem] flex flex-col gap-4 sm:gap-10 justify-center items-center transition-colors">
        <div class="flex gap-4 items-center">
          <component :is="icon" />
          <p
            class="capitalize heading-s text-dark-navy dark:text-pure-white transition-colors font-medium text-center"
            :class="{ '!uppercase': param === 'html' || param === 'css' }"
          >
            {{ param }}
          </p>
        </div>
        <div class="flex flex-col justify-center text-center">
          <p class="display text-dark-navy font-medium dark:text-pure-white transition-colors">{{ correctAnswers }}</p> 
          <p class="body-m text-grey-navy dark:text-light-bluish transition-colors">out of {{ quizLength }}</p>
        </div>
      </div>
      
      <Button href="/">Play Again</Button>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue';
import Button from './form/Button.vue';

///// props/emits /////
defineProps<{
  correctAnswers: number;
  quizLength: number;
  icon: DefineComponent;
  param: string;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
