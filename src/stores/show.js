import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getShows } from '@/services/getShows';

export const useShowStore = defineStore('show', () => {
// State
  const listOfShows = ref([]);
  const listOfGenres = {};
// Getters


// Actions
async function getAllShows() {
  const tempArray = await getShows()

  tempArray.forEach(showObject => {
    // for each genre api data check if it exist in listOfGenres
    // create list of all genres
    CreateGenreArray(showObject.genres)
  });

      // Sort shows by genre in list of genres
      sortByGenre(listOfGenres, tempArray)
      // return listOfGenres

  this.listOfShows = listOfGenres;

};

function CreateGenreArray(genresArray) {
  genresArray.forEach(genre => {
    if(!(genre in listOfGenres)) {
      // create new genre key in listOfGenres
      listOfGenres[genre] = []
    }
  });
}

function sortByGenre(genresList, showList) {
  showList.forEach(show => {
    show.genres.forEach(genre => {
      if(genre in genresList) {
        genresList[genre].push(show)
      }

    })
  });

}

return {listOfShows, getAllShows}
})
