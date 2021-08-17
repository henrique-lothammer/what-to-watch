import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ListsContext } from 'contexts/ListsContext'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Poster from 'components/Poster'
import 'jest-styled-components'
import { IMovieList } from 'components/types'

describe('Poster Component', () => {
  afterEach(cleanup)
  const movie = {
    id: 1,
    title: 'Movie test',
    posterPath: 'teste.path',
    voteAverage: 8,
  }

  const movieNoPicture = {
    id: 1,
    title: 'Movie test',
    posterPath: '',
    voteAverage: 8,
  }

  it('should render', () => {
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Router history={history}>
        <Poster movie={movie} />
      </Router>
    )

    const element = getByText(/Movie test/i)
    expect(element).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render no-picture.jpg when there is no posterPath', () => {
    const history = createMemoryHistory()
    const { getByTestId } = render(
      <Router history={history}>
        <Poster movie={movieNoPicture} />
      </Router>
    )

    const element = getByTestId(/movie-picture/i)
    expect(element).toBeInTheDocument()
    expect(element.getAttribute('src')).toStrictEqual('no-picture.jpg')
  })

  it('should navigate to the details page when clicked', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <Poster movie={movie} />
      </Router>
    )
    fireEvent.click(getByText(/Movie test/i))
    expect(history.location.pathname).toEqual('/details/1')
  })

  it('should add to favorite list and watch later list when clicked', () => {
    const history = createMemoryHistory()
    const addToFavorites = jest.fn()
    const addToWatchLater = jest.fn()
    const { getByTestId } = render(
      <ListsContext.Provider
        value={{
          favoriteList: [] as IMovieList[],
          watchLaterList: [] as IMovieList[],
          addToFavorites,
          addToWatchLater,
        }}
      >
        <Router history={history}>
          <Poster movie={movie} />
        </Router>
      </ListsContext.Provider>
    )
    const button = getByTestId(/add-to-favorite/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(getByTestId(/add-to-favorite/i))
    expect(addToFavorites).toHaveBeenCalled()
    fireEvent.click(getByTestId(/add-to-watch-later/i))
    expect(addToWatchLater).toHaveBeenCalled()
  })
})
