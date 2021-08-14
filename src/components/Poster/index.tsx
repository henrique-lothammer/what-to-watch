import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import Score from 'components/Score'

import { IMovieList } from '../PostersSection/types'
import { Container, Title, Picture } from './styles'

export interface IProp {
  movie: IMovieList
  list?: boolean
}

const PosterSection = ({ movie, list = false }: IProp): ReactElement => {
  const history = useHistory()
  const { title, voteAverage } = movie
  return (
    <Container onClick={() => history.push(`/details/${movie.id}`)} list={list}>
      <Score score={voteAverage} shadow />
      <Picture>
        {movie.posterPath && (
          <img
            src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.posterPath}`}
            alt={movie.title}
          />
        )}
      </Picture>
      <Title>
        <h3>{title}</h3>
      </Title>
    </Container>
  )
}

export default PosterSection
