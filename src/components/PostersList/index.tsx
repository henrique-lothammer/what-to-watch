import React from 'react'

import Poster from 'components/Poster'
import { IMovieList } from 'components/PostersSection/types'

import { Container } from './styles'

interface IProps {
  movies: IMovieList[]
}

const PostersList: React.FC<IProps> = ({ movies }: IProps) => {
  return (
    <Container>
      {movies.map((movie) => (
        <Poster key={movie.id} movie={movie} list />
      ))}
    </Container>
  )
}

export default PostersList
