import { setActivePinia, createPinia } from 'pinia'
import { useShowStore } from '@/services/getShows'
import { beforeEach, describe } from 'vitest'

describe('Show store', () => {
  beforeEach(() => {
    setActivePinia(createPinia()),
  })

  it('Should create a genre array', () =>{
    const showStore = useShowStore();

    expect(showStore.listOfGenres).toBe
  })
})
