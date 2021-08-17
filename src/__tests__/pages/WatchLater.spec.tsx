import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import WatchLater from 'pages/WatchLater'
import { ListsContext } from 'contexts/ListsContext'
import { IMovieList } from 'components/types'

describe('Watch Later Page', () => {
  const movie = {
    id: 1,
    title: 'Movie test',
    posterPath: 'teste.path',
    voteAverage: 8,
  }

  it('Should render', () => {
    const history = createMemoryHistory()
    history.push(`/watchlater`)
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/watchlater']} initialIndex={0}>
        <Route path='/'>
          <WatchLater />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/watch-later/i)
    expect(element).toBeInTheDocument()
  })

  it('Should render with movies', () => {
    const history = createMemoryHistory()
    history.push(`/watchlater`)
    const { getByText } = render(
      <ListsContext.Provider
        value={{
          watchLaterList: [movie],
          favoriteList: [] as IMovieList[],
          addToFavorites: jest.fn(),
          addToWatchLater: jest.fn(),
        }}
      >
        <MemoryRouter initialEntries={['/watchlater']} initialIndex={0}>
          <Route path='/'>
            <WatchLater />
          </Route>
        </MemoryRouter>
      </ListsContext.Provider>
    )

    const titleElement = getByText(/Movie test/i)
    expect(titleElement).toBeInTheDocument()
  })
})
