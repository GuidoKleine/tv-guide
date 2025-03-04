<template>
  <div v-for="(genre, id) in showStore.listOfShows" :key="id">
      <h3 id="genre-title">
        {{ id }}
      </h3>
      <div class="list-container">
      <button class="list-button"> < </button>
      <ul id="genre-list" class="list-carrousal">
        <showItem @click="goToTvShowPage(genre[id], value.name)" class="show-item" v-for="(value, id) in genre" :key="id"
          :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${value.image.medium});`">
          <template #show-title>
            <h4>{{ value.name }}</h4>
          </template>
        </showItem>
      </ul>
      <button class="list-button"> > </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useShowStore } from '@/stores/shows';
import { useShowInfoStore} from '@/stores/showInfo';
import showItem from './showItem.vue';

const router = useRouter()
const showStore = useShowStore();
const tvShowStore = useShowInfoStore();

function goToTvShowPage(tvShow, tvShowName) {
  tvShowStore.setTvShowInfo(tvShow);
  router.push({ path: `tvshow/${tvShowName}`, })
}

</script>

<style>
.list-button {
  z-index: 1;
}

.list-container {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  height: 150px;
}

.list-carrousal {
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  z-index: 0;
}

.show-item {
  position: relative;
  width: 100px;
  margin: 8px 8px 8px 0px;
  display: inline-block;
}

@media screen and (min-width:769px) {
  .list-container {
    height: 300px;
  }

  .show-item {
    width: 200px;
  }

}
</style>
