import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import Score from 'components/Score'

import noPicture from 'assets/no-picture.jpg'

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
    <Container
      onClick={() => history.push(`/details/${movie.id}`)}
      list={list ? 1 : 0}
      title={movie.title}
    >
      <Score score={voteAverage} shadow />
      <Picture>
        <img
          src={
            movie.posterPath
              ? `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.posterPath}`
              : noPicture
          }
          alt={movie.title}
        />
      </Picture>
      <Title>
        <h3>{title}</h3>
      </Title>
    </Container>
  )
}

export default PosterSection
