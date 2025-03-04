<template>
  <button aria-label='back' class="back-button" @click="goToHomePage()">back</button>
  <div class="show-container">
    <img :src='tvShowStore.tvShowInfo.image.medium' />
    <div class="title-container">
      <div class="short-info-wrapper">
        <h1> {{ tvShowStore.tvShowInfo.name }}</h1>
        <h2> rating: {{ tvShowStore.tvShowInfo.rating.average }}</h2>
        <div>
          <h3> premiered: {{ tvShowStore.tvShowInfo.premiered }}</h3>
          <h3> ended: {{ tvShowStore.tvShowInfo.ended }}</h3>
        </div>
      </div>
      <div class="summary-text">
        <p v-html="tvShowStore.tvShowInfo.summary"></p>
      </div>
      <p> {{ tvShowStore.tvShowInfo.language }}</p>
    </div>
  </div>
</template>

<script setup>
import { useShowInfoStore} from '@/stores/showInfo';

const tvShowStore = useShowInfoStore();

function goToHomePage() {
  history.back();
}

</script>

<style>
 .back-button {
    background-color: grey;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    margin-bottom: 8px;
    padding: 10px 16px;
  text-align: center;
  vertical-align: baseline;
}

.back-button:hover,
.back-button:focus {
  background-color: black;
}

.show-container {
    display: flex;
    flex-direction: column;
  }

.summary-text {
  margin-top: 8px;

}

@media screen and (min-width:769px) {

  .title-container {
    display: inline-block;
    margin-left: 16px;
  }

  .show-container {
    flex-direction: row;
  }

  .short-info-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
