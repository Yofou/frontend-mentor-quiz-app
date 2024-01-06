<template>
  <nav class="w-full flex justify-between max-w-[72.3125rem] items-center">
    <div>
      <slot></slot> 
    </div>

    <div class="flex gap-4">
      <Sun />
      <Switch v-model="isDark" />
      <Moon />
    </div>
  </nav>
</template>

<script setup lang="ts">
import Switch from './form/Switch.vue';
import Sun from './icons/Sun.vue'
import Moon from './icons/Moon.vue'

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////
const color = useColorMode();
const isDark = computed<boolean>({
  get() {
    if (color.preference === 'system') {
      return color.value === 'dark'
    }

    return color.preference === 'dark'
  },
  set(value) {
    if (value) {
      color.preference = 'dark'
    } else {
      color.preference = 'light';
    }
  }
})

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
