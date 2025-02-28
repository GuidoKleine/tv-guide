<script setup>
import { RouterView } from 'vue-router'
import { useShowStore } from './stores/show';
const showStore = useShowStore();

showStore.getAllShows();

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
