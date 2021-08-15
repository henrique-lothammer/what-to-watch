import { IMovieList } from 'components/types'

const FAVORITES_STORAGE = '@favorites'
const WATCH_LATER_STORAGE = '@watchLater'

export const removeFromFavorites = (id: number): void => {
  const storageData = localStorage.getItem(FAVORITES_STORAGE)

  if (storageData) {
    const parsedData = JSON.parse(storageData)
    const newData = parsedData.filter((movie: IMovieList) => movie.id !== id)

    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newData))
  }
}

export const setFavorite = (movie: IMovieList): boolean => {
  const storageData = localStorage.getItem(FAVORITES_STORAGE)
  const movieToSave = {
    id: movie.id,
    title: movie.title,
    voteAverage: movie.voteAverage,
    posterPath: movie.posterPath,
  }

  let favoritedMovies = []
  if (storageData) {
    favoritedMovies = JSON.parse(storageData)
    const isDuplicated: boolean = favoritedMovies.some(
      (favMovie: IMovieList) => favMovie.id === movie.id
    )

    if (isDuplicated) {
      removeFromFavorites(movie.id)
      return false
    }
  }

  if (favoritedMovies.length) {
    localStorage.setItem(
      FAVORITES_STORAGE,
      JSON.stringify([...favoritedMovies, movieToSave])
    )
  } else {
    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify([movieToSave]))
  }

  return true
}

export const getAllFavorites = (): IMovieList[] | null => {
  const storedData = localStorage.getItem(FAVORITES_STORAGE)

  if (storedData) return JSON.parse(storedData)

  return null
}

export const getFavorite = (id: number): IMovieList | null => {
  const storedData = localStorage.getItem(FAVORITES_STORAGE)

  if (storedData) {
    const favoritedMovies = JSON.parse(storedData)
    const movie = favoritedMovies.find(
      (favMovie: IMovieList) => favMovie.id === id
    )
    if (movie === undefined) return null
    return movie
  }

  return null
}

export const removeFromWatchLater = (id: number): void => {
  const storageData = localStorage.getItem(WATCH_LATER_STORAGE)

  if (storageData) {
    const parsedData = JSON.parse(storageData)
    const newData = parsedData.filter((movie: IMovieList) => movie.id !== id)

    localStorage.setItem(WATCH_LATER_STORAGE, JSON.stringify(newData))
  }
}

export const setWatchLater = (movie: IMovieList): boolean => {
  const storageData = localStorage.getItem(WATCH_LATER_STORAGE)
  const movieToSave = {
    id: movie.id,
    title: movie.title,
    voteAverage: movie.voteAverage,
    posterPath: movie.posterPath,
  }

  let favoritedMovies = []
  if (storageData) {
    favoritedMovies = JSON.parse(storageData)
    const isDuplicated: boolean = favoritedMovies.some(
      (favMovie: IMovieList) => favMovie.id === movie.id
    )

    if (isDuplicated) {
      removeFromWatchLater(movie.id)
      return false
    }
  }

  if (favoritedMovies.length) {
    localStorage.setItem(
      WATCH_LATER_STORAGE,
      JSON.stringify([...favoritedMovies, movieToSave])
    )
  } else {
    localStorage.setItem(WATCH_LATER_STORAGE, JSON.stringify([movieToSave]))
  }

  return true
}

export const getAllWatchLater = (): IMovieList[] | null => {
  const storedData = localStorage.getItem(WATCH_LATER_STORAGE)

  if (storedData) return JSON.parse(storedData)

  return null
}

export const getWatchLater = (id: number): IMovieList | null => {
  const storedData = localStorage.getItem(WATCH_LATER_STORAGE)

  if (storedData) {
    const favoritedMovies = JSON.parse(storedData)
    const movie = favoritedMovies.find(
      (favMovie: IMovieList) => favMovie.id === id
    )
    if (movie === undefined) return null
    return movie
  }

  return null
}
