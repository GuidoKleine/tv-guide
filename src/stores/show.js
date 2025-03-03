import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getShows } from '@/services/getShows'

export const useShowStore = defineStore('show', () => {
  // State
  const listOfShows = ref([])
  const listOfGenres = {}
  // Getters
  const genreTitle = computed(() => Object.keys(listOfShows.value))

  // Actions
  async function getAllShows() {
    const tempArray = await getShows()

    // Sort shows by genre in list of genres
    sortByGenre(listOfGenres, tempArray)
    sortByRating(listOfGenres)
    this.listOfShows = listOfGenres
  }

  function sortByGenre(genresList, showsData) {
    // Check genre of each show
    showsData.forEach((show) => {
      show.genres.forEach((genre) => {
        // create genre object if not in listOfGenre
        if (!(genre in listOfGenres)) {
          listOfGenres[genre] = []
        }
        genresList[genre].push(show)
      })
    })
  }

  function sortByRating(showsData) {
    // Sort each genre array based on rating
    Object.values(showsData).forEach((genre) => {
      genre.sort((a, b) => b.rating.average - a.rating.average)
    })
  }

  return {
    listOfShows,
    genreTitle,
    listOfGenres,
    getAllShows,
    sortByGenre,
    sortByRating,
  }
})
