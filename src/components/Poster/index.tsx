import React, { ReactElement, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FaClock, FaStar } from 'react-icons/fa'

import Score from 'components/Score'
import { ListsContext } from 'contexts/ListsContext'
import noPicture from 'assets/no-picture.jpg'

import { colors } from 'styles/variables'
import { IMovieList } from '../types'
import {
  Container,
  Title,
  Picture,
  ButtonFavorite,
  ButtonWatchLater,
} from './styles'

export interface IProp {
  movie: IMovieList
  list?: boolean
}

const PosterSection = ({ movie, list = false }: IProp): ReactElement => {
  const history = useHistory()
  const { addToFavorites, addToWatchLater, favoriteList, watchLaterList } =
    useContext(ListsContext)
  const { title, voteAverage } = movie

  const handleWatchLater = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    movieToAdd: IMovieList
  ) => {
    e.stopPropagation()
    addToWatchLater(movieToAdd)
  }

  const handleFavorite = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    movieToAdd: IMovieList
  ) => {
    e.stopPropagation()
    addToFavorites(movieToAdd)
  }

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
        <ButtonFavorite
          title='Add to favorite'
          onClick={(e) => handleFavorite(e, movie)}
        >
          <FaStar
            width={20}
            color={
              favoriteList?.find((m) => m.id === movie.id) ? colors.active : ''
            }
          />
        </ButtonFavorite>
        <ButtonWatchLater
          title='Add to watch later'
          onClick={(e) => handleWatchLater(e, movie)}
        >
          <FaClock
            width={20}
            color={
              watchLaterList?.find((m) => m.id === movie.id)
                ? colors.active
                : ''
            }
          />
        </ButtonWatchLater>
      </Picture>
      <Title>
        <h3>{title}</h3>
      </Title>
    </Container>
  )
}

export default PosterSection
