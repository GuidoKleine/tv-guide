<template>
  <div>
    <ul v-for="genre in showStore.listOfShows" :key="genre">
      <li>{{ genre }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useShowStore } from '@/stores/show';

const showStore = useShowStore();

</script>

<style>

</style>
