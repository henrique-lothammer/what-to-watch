import React, { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaClock } from 'react-icons/fa'
import { getYear, parseISO } from 'date-fns'

import Api from 'services/Api'
import {
  setFavorite,
  getFavorite,
  setWatchLater,
  getWatchLater,
} from 'services/Storage'

import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import Score from 'components/Score'

import noPicture from 'assets/no-picture.jpg'

import { IMovieList } from 'components/types'
import { colors } from 'styles/variables'
import { IMovie, IMovieVideos } from '../types'
import {
  Container,
  Cover,
  Poster,
  Description,
  DescriptionItems,
  WatchLaterBtn,
  FavoriteBtn,
  DescriptionText,
  ButtonsContainer,
  Video,
  Warning,
} from './styles'

interface IParams {
  id: string
}

const Details = (): ReactElement => {
  const { id } = useParams<IParams>()

  const [movie, setMovie] = useState<IMovie>({} as IMovie)
  const [favorited, setFavorited] = useState<IMovieList | null>(() =>
    getFavorite(Number(id))
  )
  const [doWatchLater, setDoWatchLater] = useState<IMovieList | null>(() =>
    getWatchLater(Number(id))
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await Api.get(`/movie/${id}?append_to_response=videos`)
        const { data } = response

        const year = getYear(parseISO(data.release_date))
        if (!data.overview) data.overview = 'No overview provided.'
        if (data.videos.results.length) {
          data.videos = data.videos.results.filter(
            (video: IMovieVideos) => video.site === 'YouTube'
          )
          if (data.videos.length > 3)
            data.videos.splice(0, data.videos.length - 2)
        }
        setMovie({
          id: data.id,
          title: data.title,
          voteAverage: data.vote_average,
          posterPath: data.poster_path,
          backdropPath: data.backdrop_path,
          overview: data.overview,
          releaseDate: data.release_date,
          runtime: data.runtime,
          year: String(year) || 'unknow',
          genres: data.genres,
          videos: data.videos,
        })

        setLoading(false)
      } catch (e) {
        setError(`Ops! An error ocurred. Please, try again later. :(`)
        setLoading(false)
      }
    }
    getMovie()
  }, [id])

  const handleWatchLater = async () => {
    await setWatchLater(movie)
    setDoWatchLater(getWatchLater(Number(id)))
  }

  const handleFavorite = async () => {
    await setFavorite(movie)
    setFavorited(getFavorite(Number(id)))
  }

  return (
    <>
      <HeaderBar />
      <main data-testid='details'>
        {error && <Warning>{error}</Warning>}
        {loading && <Warning>{loading}</Warning>}
        {movie.title && (
          <Cover
            background={
              movie.backdropPath
                ? `${process.env.REACT_APP_TMDB_IMAGE_URL}/original${movie.backdropPath}`
                : ``
            }
          >
            <div className='wrapper'>
              <Container>
                <Score score={movie.voteAverage} top='20px' shadow={false} />
                <Poster
                  src={
                    movie.posterPath
                      ? `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.posterPath}`
                      : noPicture
                  }
                />
                <Description>
                  <h2>{`${movie.title}  (${movie.year})`}</h2>
                  <DescriptionItems>
                    <li>{`${movie.runtime} min`}</li>
                    {movie.genres?.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </DescriptionItems>
                  <DescriptionText>
                    <p>{movie.overview}</p>
                  </DescriptionText>
                </Description>
                <ButtonsContainer>
                  <WatchLaterBtn
                    onClick={handleWatchLater}
                    watchLatered={!!doWatchLater}
                    title='Add to watch list'
                  >
                    <FaClock
                      color={doWatchLater ? colors.active : colors.font}
                      width={20}
                    />{' '}
                    Watch Later
                  </WatchLaterBtn>
                  <FavoriteBtn
                    onClick={handleFavorite}
                    favorited={!!favorited}
                    title='Add to favorites'
                  >
                    <FaStar
                      color={favorited ? colors.active : colors.font}
                      width={20}
                    />{' '}
                    Favorite
                  </FavoriteBtn>
                </ButtonsContainer>
              </Container>
            </div>
          </Cover>
        )}
        <div className='wrapper center-colum'>
          {movie.videos?.length &&
            movie.videos?.map((video) => (
              <Video
                key={video.key}
                src={`https://www.youtube.com/embed/${video.key}?autoplay=0`}
                frameBorder='0'
                allowFullScreen
                title='YouTube'
                className='youtube-player'
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Details
