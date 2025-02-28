import { setActivePinia, createPinia } from 'pinia'
import { useShowStore } from '@/stores/show';
import { beforeEach, describe, it, expect, test } from 'vitest'

describe('Show store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Should create new genre array and sort shows by genre', () => {
    const showStore = useShowStore();

    const apiData = [{'title': ' show1', 'genres':['Drama', 'Action']}, {'title': 'show2', 'genres': ['Drama', 'Comedy']}]
    showStore.listOfGenres = {'Drama': [], 'Comedy': [], 'Action': []}

    showStore.sortByGenre(showStore.listOfGenres, apiData)

    expect(showStore.listOfGenres.Drama).toHaveLength(2)
    expect(showStore.listOfGenres.Action).toHaveLength(1)
    expect(showStore.listOfGenres.Comedy).toHaveLength(1)
  })

  it('Should sort each genre array by rating', () => {
    const showStore = useShowStore();

    const testData = {
      'Comedy': [
        {'id': 4, 'rating': {'average': 6.8}},
        {'id': 61, 'rating': {'average': 7.9}},
        {'id': 99, 'rating': {'average': 8.1}},
      ]
    };

    const expectedResult = {
      'Comedy': [
        {'id': 99, 'rating': {'average': 8.1}},
        {'id': 61, 'rating': {'average': 7.9}},
        {'id': 4, 'rating': {'average': 6.8}},
      ]}

    showStore.sortByRating(testData)
    expect(testData).toEqual(expectedResult);
  })
})
