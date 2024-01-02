<template>
  <div class="w-full min-h-screen overflow-x-hidden grid auto-rows-max bg-light-grey dark:bg-dark-navy transition-colors relative px-6 sm:px-16">
    <BackgroundTopLeft class="absolute top-0 left-0" />
    <div class="contents layout-items">
      <slot />
    </div>
    <BackgroundBottomRight class="absolute right-0 bottom-0 hidden lg:block" />
  </div>
</template>

<script setup lang="ts">
import BackgroundBottomRight from '~/components/icons/BackgroundBottomRight.vue';
import BackgroundTopLeft from '~/components/icons/BackgroundTopLeft.vue';

///// props/emits /////
defineProps()

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>

<style scoped>
.layout-items > :deep(*) {
  z-index: 1;
}
</style>
