import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Favorites from 'pages/Favorites'
import { ListsContext } from 'contexts/ListsContext'
import { IMovieList } from 'components/types'

describe('Favorites Page', () => {
  const movie = {
    id: 1,
    title: 'Movie test',
    posterPath: 'teste.path',
    voteAverage: 8,
  }

  it('Should render', () => {
    const history = createMemoryHistory()
    history.push(`/favorites`)
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/favorites']} initialIndex={0}>
        <Route path='/'>
          <Favorites />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/favorites/i)
    expect(element).toBeInTheDocument()
  })

  it('Should render with movies', () => {
    const history = createMemoryHistory()
    history.push(`/favorites`)
    const { getByTestId, getByText } = render(
      <ListsContext.Provider
        value={{
          favoriteList: [movie],
          watchLaterList: [] as IMovieList[],
          addToFavorites: jest.fn(),
          addToWatchLater: jest.fn(),
        }}
      >
        <MemoryRouter initialEntries={['/favorites']} initialIndex={0}>
          <Route path='/'>
            <Favorites />
          </Route>
        </MemoryRouter>
      </ListsContext.Provider>
    )

    const element = getByTestId(/favorites/i)
    expect(element).toBeInTheDocument()
    const titleElement = getByText(/Movie test/i)
    expect(titleElement).toBeInTheDocument()
  })
})
