<script setup>
import { RouterView } from 'vue-router'
import { useShowStore } from './stores/shows';
const showStore = useShowStore();

showStore.setAllShows();

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
