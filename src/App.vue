<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { DEFAULT_LAYOUT } from './constant';

const route = useRoute();
const layout = computed(() => {
  // If there is a layout defined on the route, use it.
  if (route.meta.layout) {
    return route.meta.layout;
  }
  // Otherwise, use the default layout.
  return DEFAULT_LAYOUT;
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
