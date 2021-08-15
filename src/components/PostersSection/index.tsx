import React, { ReactElement, useEffect, useState } from 'react'

import Api from 'services/Api'
import Poster from '../Poster'

import { IMovieList, IMovieListJSON } from '../types'
import { Container, Title, PosterList, Warning } from './styles'

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
    setError('')
    const getMovies = async () => {
      setLoading(true)
      try {
        const response = await Api.get(query)
        const { results } = response.data
        setMovies(
          results.map((movie: IMovieListJSON) => {
            return {
              id: movie.id,
              title: movie.title,
              voteAverage: movie.vote_average,
              posterPath: movie.poster_path,
            }
          })
        )
      } catch (e) {
        setError(`Ops! An error ocurred. Please, try again later. :(`)
      }
      setLoading(false)
    }
    getMovies()
  }, [query])

  return (
    <Container data-testid='posters-section'>
      <Title>{title}</Title>
      <PosterList>
        {loading && <Warning>{loading}</Warning>}
        {error && <Warning>{error}</Warning>}
        {movies.map((movie) => (
          <Poster key={movie.id} movie={movie} />
        ))}
      </PosterList>
    </Container>
  )
}

export default PosterSection
