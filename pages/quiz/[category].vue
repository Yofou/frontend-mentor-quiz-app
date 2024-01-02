<template>
  <div>
    <p v-for="question of questions.data.value">
    {{ question.question }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useQuestions } from '~/utils/category';

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////
const route = useRoute()

const param = typeof route.params.category === 'string' ? route.params.category : route.params.category[0]
if (!isCategory(param)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

const questions = await useQuestions(param)

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
