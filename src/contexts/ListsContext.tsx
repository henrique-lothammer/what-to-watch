import { IMovieList } from 'components/types'
import React, { createContext, useState } from 'react'
import {
  setFavorite,
  setWatchLater,
  getAllFavorites,
  getAllWatchLater,
} from 'services/Storage'

interface IListsContext {
  favoriteList: IMovieList[]
  watchLaterList: IMovieList[]
  addToFavorites(movie: IMovieList): void
  addToWatchLater(movie: IMovieList): void
}

const ListsContext = createContext<IListsContext>({} as IListsContext)

const ListsProvider: React.FC = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState(
    () => getAllFavorites() || []
  )
  const [watchLaterList, setwatchLaterList] = useState(
    () => getAllWatchLater() || []
  )

  const addToFavorites = async (movie: IMovieList) => {
    await setFavorite(movie)
    setFavoriteList(getAllFavorites() || [])
  }

  const addToWatchLater = async (movie: IMovieList) => {
    await setWatchLater(movie)
    setwatchLaterList(getAllWatchLater() || [])
  }

  return (
    <ListsContext.Provider
      value={{
        favoriteList,
        watchLaterList,
        addToFavorites,
        addToWatchLater,
      }}
    >
      {children}
    </ListsContext.Provider>
  )
}

export { ListsContext, ListsProvider }
