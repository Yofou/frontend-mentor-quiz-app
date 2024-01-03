<template>
  <Nav class="justify-self-center mt-[1.62rem] sm:mt-14 lg:mt-[5.2rem]">
    <div class="flex gap-4 items-center">
      <Icon />
      <p
        class="capitalize heading-s text-dark-navy dark:text-pure-white transition-colors font-medium"
        :class="{ '!uppercase': param === 'html' || param === 'css' }"
      >
        {{ param }}
      </p>
    </div>
  </Nav>

  <main
    class="max-w-[72.3125rem] w-full justify-self-center mt-[5.31rem] grid grid-cols-[29.0625rem,1fr] gap-[8.19rem]"
  >
    <section>
      <h2
        class="body-s text-grey-navy dark:text-light-bluish transition-colors"
      >
        Question {{ currentQuestionIndex + 1 }} of
        {{ questions.data.value?.length }}
      </h2>
      <h3
        class="heading-m text-dark-navy dark:text-pure-white transition-colors font-medium mt-[1.69rem]"
      >
        {{ currentQuestion?.question }}
      </h3>

      <div
        class="w-full bg-pure-white dark:bg-navy transition-colors h-4 rounded-full p-1 mt-[10.5rem]"
      >
        <div
          class="w-[var(--width)] h-2 bg-purple rounded-full transition-[width]"
          :style="{ '--width': `${quizProgress}%` }"
        />
      </div>
    </section>

    <section class="flex flex-col gap-6">
      <QuestionOption
        v-for="(option, index) of currentQuestion?.options"
        :letter="alphabet[index]"
        :selected="selectedIndex === index"
        :correct="correctAnswer != null ? correctAnswer === index : undefined"
        :wrong="
          selectedIndex === index &&
          correctAnswer != null &&
          correctAnswer !== index
        "
        :disable="correctAnswer != null"
        @click="selectIndex(index)"
      >
        {{ option }}
      </QuestionOption>

      <Button v-if="correctAnswer == null" class="mt-2" @click="onSubmit">
          Submit Answer
      </Button>
      <Button v-else class="mt-2" @click="onNext">Next Question</Button>
      
      <span v-if="selectAnAnswer" class="mx-auto flex gap-4 items-center body-m text-red transition-colors dark:text-light-grey"><Cross /> Please select an answer</span>
    </section>
  </main>
</template>

<script setup lang="ts">
import Nav from "~/components/Nav.vue";
import { useQuestions, type CategoryGroup } from "~/utils/category";
import HTML from "~/components/icons/HTML.vue";
import CSS from "~/components/icons/CSS.vue";
import JS from "~/components/icons/JS.vue";
import Accessibility from "~/components/icons/Accessibility.vue";
import QuestionOption from "~/components/QuestionOption.vue";
import Button from "~/components/form/Button.vue";
import Cross from '~/components/icons/Cross.vue'

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////
const route = useRoute();

const param =
  typeof route.params.category === "string"
    ? route.params.category
    : route.params.category[0];
if (!isCategory(param)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const questions = await useQuestions(param);
const currentQuestionIndex = ref(0);
const selectedIndex = ref<number>();
const answers = ref<number[]>([]);
const selectAnAnswer = ref(false)

///// computed /////
const currentQuestion = computed(
  () => questions.data.value?.[currentQuestionIndex.value]
);
const quizProgress = computed(() => {
  const result =
    (currentQuestionIndex.value + 1) / (questions.data.value?.length ?? 1);

  return result * 100;
});

const correctAnswer = computed(() => {
  const answer = answers.value[currentQuestionIndex.value];
  return answer;
});

///// methods /////
const selectIndex = (index: number) => {
  selectedIndex.value = index;
};

const onSubmit = async () => {
  if (currentQuestionIndex.value == null) {
    return;
  } else if (selectedIndex.value == null) {
    selectAnAnswer.value = true; 
    return;
  }

  const result = await $fetch(
    `/api/answers/${param}/${currentQuestionIndex.value}`
  );
  if (result != null) {
    answers.value[currentQuestionIndex.value] = result;
    selectAnAnswer.value = false;
  }
};

const getCategoryIcon = (value: CategoryGroup) => {
  const categoriesIcons = {
    html: HTML,
    css: CSS,
    javascript: JS,
    accessibility: Accessibility,
  } as const;

  return categoriesIcons[value];
};

const onNext = () => {
  if (questions.data.value && currentQuestionIndex.value === questions.data.value?.length - 1) { 
    return
  }

  selectedIndex.value = undefined;
  currentQuestionIndex.value += 1;
};

const Icon = getCategoryIcon(param);

///// watchers /////

///// lifecycle /////
</script>
