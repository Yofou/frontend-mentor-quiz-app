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

  <Results 
    v-if="hasFinishedQuiz" 
    :correctAnswers="correct"
    :icon="Icon"
    :param="param"
    :quizLength="questions.data.value?.length"
  />
  <Quiz 
    v-else
    :correctAnswer="correctAnswer"
    :quizProgress="quizProgress"
    :question="currentQuestion?.question"
    :options="currentQuestion?.options"
    :selectAnAnswer="selectAnAnswer"
    :currentQuestionIndex="currentQuestionIndex"
    :quizLength="questions.data.value?.length"
    :selectedIndex="selectedIndex"
    @submit="onSubmit"
    @next="onNext"
    @selectIndex="selectIndex"
  />
</template>

<script setup lang="ts">
import Nav from "~/components/Nav.vue";
import Results from "~/components/Results.vue";
import { useQuestions, type CategoryGroup } from "~/utils/category";
import HTML from "~/components/icons/HTML.vue";
import CSS from "~/components/icons/CSS.vue";
import JS from "~/components/icons/JS.vue";
import Accessibility from "~/components/icons/Accessibility.vue";

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

const questions = await useQuestions(param);
const currentQuestionIndex = ref(0);
const selectedIndex = ref<number>();
const answers = ref<number[]>([]);
const selectAnAnswer = ref(false)
const correct = ref(0);

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

const hasFinishedQuiz = computed(() => {
  const quizLength = questions.data.value?.length ?? 0

  return currentQuestionIndex.value >= quizLength
})

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
    correct.value += selectedIndex.value == result ? 1 : 0
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
  selectedIndex.value = undefined;
  currentQuestionIndex.value += 1;
};

const Icon = getCategoryIcon(param);

///// watchers /////

///// lifecycle /////
</script>
