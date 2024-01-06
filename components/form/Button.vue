<template>
  <button
    class="p-[1.2rem] sm:p-8 text-pure-white shadow-quiz-category rounded-[.75rem] sm:rounded-[1.5rem] heading-s font-medium"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

///// props/emits /////
defineProps();

const emits = defineEmits<{
  (e: "click"): void;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
const onClick = () => {
  emits("click");
};
</script>

<style scoped>
@property --color-1 {
  syntax: "<color>";
  initial-value: theme("colors.purple");
  inherits: false;
}

@property --color-2 {
  syntax: "<color>";
  initial-value: theme("colors.purple");
  inherits: false;
}

button {
  --color-1: theme("colors.purple");
  background: linear-gradient(0deg, var(--color-1) 0%, var(--color-1) 100%),
    theme("colors.purple");
  transition: --color-1 150ms, --color-2 150ms;
}

button:hover,
button:focus {
  --color-1: rgba(255, 255, 255, 0.5);
}
</style>
