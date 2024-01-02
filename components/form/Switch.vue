<template>
  <label class="w-12 h-7 rounded-full flex items-center p-1 cursor-pointer bg-purple">
    <input class="hidden" v-model="value" type="checkbox" />
    <div class="w-5 h-5 rounded-full bg-pure-white transition-transform dark:translate-x-5" />
  </label>
</template>

<script setup lang="ts">
///// props/emits /////
defineProps();

const value = defineModel<boolean>()

///// refs, provide or inject then variables /////


///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
