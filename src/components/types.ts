export interface IMovieList {
  id: number
  title: string
  voteAverage: number
  posterPath: string
}

export interface IMovieListJSON {
  id: number
  title: string
  poster_path: string
  vote_average: number
}
