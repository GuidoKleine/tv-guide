<template>
  <main>
    <h1>Shows sorted by Genre</h1>
    <p>{{ showStore.listOfShows }}</p>
  </main>
</template>

<script setup>
import { useShowStore } from '@/stores/show';

const showStore = useShowStore();

</script>

