<template>
  <button
    class="px-3 py-3 lg:px-5 lg:py-[1.12rem] grid grid-cols-[max-content,1fr,2.5rem] gap-4 sm:gap-8 bg-pure-white dark:bg-navy shadow-quiz-category dark:shadow-quiz-category-dark heading-s text-dark-navy dark:text-pure-white transition-colors text-start rounded-[.75rem] sm:rounded-[1.5rem] items-center border-[3px] border-pure-white/0"
    :class="{
      'border-purple/100': props.selected,
      '!border-red/100': props.wrong && props.selected,
      '!border-green/100': props.correct && props.selected,
    }"
    @click="onClick"
    :disabled="disable"
  >
    <div
      class="w-10 h-10 sm:w-14 sm:h-14 rounded-[6px] sm:rounded-[.5rem] bg-light-grey grid place-content-center text-grey-navy heading-s font-medium transition-colors"
      :class="{ 
        'bg-purple text-pure-white': props.selected,
        'bg-green text-pure-white': props.correct && props.selected,
        'bg-red text-pure-white': props.wrong && props.selected
      }"
    >
      {{ props.letter }}
    </div>

    <slot />

    <Tick v-if="props.correct" />
    <Cross v-else-if="props.wrong" />
  </button>
</template>

<script setup lang="ts">
import Tick from "./icons/Tick.vue";
import Cross from "./icons/Cross.vue";

///// props/emits /////
const props = defineProps<{
  letter: string;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
  disable?: boolean;
}>();

const emits = defineEmits<{
  (e: "click"): void;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onClick = () => {
  emits("click");
};

///// watchers /////

///// lifecycle /////
</script>
