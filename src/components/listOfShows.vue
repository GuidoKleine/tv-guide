<template>
  <div v-for="(genre, id) in showStore.listOfShows" :key="id">
  <div>
    <h3>
      {{ id }}
    </h3>
  </div>
  <div class="list-container">
    <ul class="list-carrousal">
      <showItem  class="show-item" v-for="(value, id) in genre" :key="id" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${value.image.medium});`">
        <template #show-title>
          <h4>{{ value.name }}</h4>
        </template>
      </showItem>
    </ul>
  </div>
  </div>
</template>

<script setup>
import showItem from './showItem.vue';
import { useShowStore } from '@/stores/show';

const showStore = useShowStore();

</script>

<style>
  .list-container {
    display: flex;
    flex-wrap: nowrap;
    overflow:auto;
    height: 150px;
  }

.list-carrousal {
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0px;
}

.show-item {
  position: relative;
  width: 100px;
  margin: 8px 8px 8px 0px;
  display:inline-block;
}
</style>
