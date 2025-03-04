import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useShowInfoStore = defineStore('showInfo', () => {
  const tvShowInfo = ref({});

  function setTvShowInfo(tvShowObject) {
    this.tvShowInfo = tvShowObject;
  }

  return {
    tvShowInfo,
    setTvShowInfo,
  }
})
