export interface IMovieGenres {
  id: string
  name: string
}

export interface IMovieVideos {
  id: string
  key: string
  name: string
  site: string
}

export interface IMovie {
  id: number
  title: string
  voteAverage: number
  posterPath: string
  backdropPath: string
  overview: string
  releaseDate: string
  runtime: string
  year: string
  genres: IMovieGenres[]
  videos: IMovieVideos[]
}

export interface IMovieJSON {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  overview: string
  release_date: string
  runtime: string
}
