import React, { ReactElement, useEffect, useState } from 'react'

import Api from 'services/Api'
import Poster from '../Poster'

import { IMovieList, IMovieListJSON } from './types'
import { Container, Title, PosterList } from './styles'

interface IProps {
  section: {
    title: string
    query: string
  }
}

const PosterSection = ({ section }: IProps): ReactElement => {
  const [movies, setMovies] = useState<IMovieList[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { title, query } = section

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await Api.get(query)
        const { results } = response.data
        console.log(results)
        setMovies(
          results.map((movie: IMovieListJSON) => {
            // const posterUrl =
            //   movie.poster_path &&
            //   `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`
            return {
              id: movie.id,
              title: movie.title,
              voteAverage: movie.vote_average,
              posterPath: movie.poster_path,
            }
          })
        )
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    getMovies()
  }, [query])

  return (
    <Container>
      <Title>{title}</Title>

      <PosterList>
        {movies.map((movie) => (
          <Poster key={movie.id} movie={movie} />
        ))}
      </PosterList>
    </Container>
  )
}

export default PosterSection
