import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getShowInfo } from "@/services/getShowInfo"

export const useShowInfoStore = defineStore('showInfo', () => {
  const showInfo = ref({})

  async function setShowInformation(showId) {

    const tempInfo = await getShowInfo(showId);

    showInfo.value = tempInfo;
    console.log('info: ', showInfo.value);
  }

  return {
    setShowInformation,
  }
})
