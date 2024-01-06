<template>
  <Nav class="justify-self-center mt-[2.37rem] sm:mt-14 lg:mt-[5.2rem]" />

  <main
    class="max-w-[72.3125rem] w-full flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-8 justify-between justify-self-center mt-[3.62rem] sm:mt-16 lg:mt-[6.3rem]"
  >
    <section class="max-w-[28.3rem] w-full flex flex-col gap-4 lg:gap-12">
      <h2
        class="heading-l font-light text-dark-navy dark:text-pure-white transition-colors"
      >
        Welcome to the <span class="heading-l font-medium">Frontend Quiz!</span>
      </h2>
      <p
        class="body-s text-grey-navy dark:text-light-bluish italic transition-colors"
      >
        Pick a subject to get started.
      </p>
    </section>

    <section class="flex w-full flex-col lg:max-w-[32.25rem] gap-3 sm:gap-6">
      <QuizCategoryItem href="/quiz/html">
        <HTML />
        HTML
      </QuizCategoryItem> 
      <QuizCategoryItem href="/quiz/css">
        <CSS />
        CSS
      </QuizCategoryItem> 
      <QuizCategoryItem href="/quiz/javascript">
        <JS />
        Javascript
      </QuizCategoryItem> 
      <QuizCategoryItem href="/quiz/accessibility">
        <Accessibility />
        Accessibility
      </QuizCategoryItem> 
    </section>
  </main>
</template>

<script setup lang="ts">
import QuizCategoryItem from '~/components/QuizCategoryItem.vue'
import HTML from '~/components/icons/HTML.vue'
import CSS from '~/components/icons/CSS.vue'
import JS from '~/components/icons/JS.vue'
import Accessibility from '~/components/icons/Accessibility.vue'
///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
