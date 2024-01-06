<template>
  <main
    class="max-w-[72.3125rem] w-full justify-self-center mt-[5.31rem] grid grid-rows-[max-content,1fr] lg:grid-rows-1 grid-cols-1 lg:grid-cols-[minmax(0,29rem),1fr] gap-10 sm:gap-16 lg:gap-[8.19rem]"
  >
    <section>
      <h2
        class="body-s text-grey-navy italic dark:text-light-bluish transition-colors"
      >
        Question {{ currentQuestionIndex + 1 }} of
        {{ quizLength }}
      </h2>
      <h3
        class="heading-m text-dark-navy dark:text-pure-white transition-colors font-medium mt-3 lg:mt-[1.69rem]"
      >
        {{ question }}
      </h3>

      <div
        class="w-full bg-pure-white dark:bg-navy transition-colors h-4 rounded-full p-1 mt-6 sm:mt-10 lg:mt-[10.5rem]"
      >
        <div
          class="w-[var(--width)] h-2 bg-purple rounded-full transition-[width]"
          :style="{ '--width': `${quizProgress}%` }"
        />
      </div>
    </section>

    <section class="flex flex-col gap-3 sm:gap-6 pb-12">
      <QuestionOption
        v-for="(option, index) of options"
        :letter="alphabet[index]"
        :selected="selectedIndex === index"
        :correct="correctAnswer != null ? correctAnswer === index : undefined"
        :wrong="
          selectedIndex === index &&
          correctAnswer != null &&
          correctAnswer !== index
        "
        :disable="correctAnswer != null"
        @click="onSelectIndex(index)"
      >
        {{ option }}
      </QuestionOption>

      <Button v-if="correctAnswer == null" class="mt-2" @click="onSubmit">
          Submit Answer
      </Button>
      <Button v-else class="mt-2" @click="onNext">Next Question</Button>
      
      <span v-if="selectAnAnswer" class="mx-auto flex gap-2 sm:gap-4 items-center body-m text-red transition-colors dark:text-light-grey"><Cross /> Please select an answer</span>
    </section>
  </main>
</template>

<script setup lang="ts">
import QuestionOption from "~/components/QuestionOption.vue";
import Button from "~/components/form/Button.vue";
import Cross from '~/components/icons/Cross.vue'

///// props/emits /////
defineProps<{
  selectAnAnswer: boolean; 
  correctAnswer: number | null;
  quizProgress: number;
  selectedIndex: number | null;
  options: string[] | undefined;
  question: string;
  currentQuestionIndex: number;
  quizLength: number | null;
}>();

const emits = defineEmits<{
  (e: 'submit'): void;
  (e: 'next'): void;
  (e: 'selectIndex', index: number): void;
}>()

///// refs, provide or inject then variables /////
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

///// computed /////

///// methods /////
const onSubmit = () => emits('submit')
const onNext = () => emits('next')
const onSelectIndex = (index: number) => emits('selectIndex', index)

///// watchers /////

///// lifecycle /////
</script>
