<template>
  <div>
    <h1>title: {{ showInfoStore.showInfo.value }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useShowInfoStore } from '@/stores/showInfo';

const showInfoStore = useShowInfoStore();

const router = useRoute();

// TODO: set tv show info in store
showInfoStore.setShowInformation(router.params.id);


</script>

<style>
</style>
