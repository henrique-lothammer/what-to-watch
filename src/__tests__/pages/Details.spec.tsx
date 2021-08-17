import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Details from 'pages/Details'
import Api from 'services/Api'
import axios, { AxiosResponse } from 'axios'
import 'jest-styled-components'
import { ListsContext } from 'contexts/ListsContext'
import { IMovieList } from 'components/types'

jest.mock('services/Api')
const mockedAxios = Api as jest.Mocked<typeof axios>

describe('Watch Later Page', () => {
  it('Should render a movie details and add it to lists', async () => {
    const response = {
      id: 1,
      popularity: 10312.289,
      backdrop_path: '/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
      poster_path: '/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
      release_date: '2021-07-28',
      title: 'Star Wars',
      overview: 'a good movie',
      genres: [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
      ],
      vote_average: 8.1,
      vote_count: 2036,
      videos: {
        results: [
          { key: 'youtube-key1', site: 'YouTube' },
          { key: 'youtube-key2', site: 'YouTube' },
          { key: 'youtube-key3', site: 'YouTube' },
        ],
      },
    }

    const mockedResponse: AxiosResponse = {
      data: response,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    const addToFavorites = jest.fn()
    const addToWatchLater = jest.fn()
    const id = 1
    const history = createMemoryHistory()
    history.push(`/details/${id}`)
    const { container, getByTestId, getByText } = render(
      <ListsContext.Provider
        value={{
          favoriteList: [] as IMovieList[],
          watchLaterList: [] as IMovieList[],
          addToFavorites,
          addToWatchLater,
        }}
      >
        <MemoryRouter initialEntries={[`/details/${id}`]} initialIndex={0}>
          <Route path='/details/:id'>
            <Details />
          </Route>
        </MemoryRouter>
      </ListsContext.Provider>
    )

    const element = getByTestId(/details/i)
    expect(element).toBeInTheDocument()
    expect(Api.get).toHaveBeenCalledWith(
      `/movie/${id}?append_to_response=videos`
    )
    await waitFor(() => {
      expect(getByText(/Star Wars/)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
      fireEvent.click(getByTestId(/add-to-favorite/i))
      expect(addToFavorites).toHaveBeenCalled()
      fireEvent.click(getByTestId(/add-to-watch-later/i))
      expect(addToWatchLater).toHaveBeenCalled()
    })
  })

  it('Should render a incomplete movie details', async () => {
    const response = {
      id: 1,
      popularity: 10312.289,
      backdrop_path: '',
      poster_path: '',
      release_date: '',
      overrview: '',
      title: 'Star Wars',
      genres: [],
      vote_average: 8.1,
      vote_count: 2036,
      videos: { results: [] },
    }

    const mockedResponse: AxiosResponse = {
      data: response,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    const addToFavorites = jest.fn()
    const addToWatchLater = jest.fn()
    const id = 1
    const history = createMemoryHistory()
    history.push(`/details/${id}`)
    const { getByTestId, getByText } = render(
      <ListsContext.Provider
        value={{
          favoriteList: [] as IMovieList[],
          watchLaterList: [] as IMovieList[],
          addToFavorites,
          addToWatchLater,
        }}
      >
        <MemoryRouter initialEntries={[`/details/${id}`]} initialIndex={0}>
          <Route path='/details/:id'>
            <Details />
          </Route>
        </MemoryRouter>
      </ListsContext.Provider>
    )

    const element = getByTestId(/details/i)
    expect(element).toBeInTheDocument()
    expect(Api.get).toHaveBeenCalledWith(
      `/movie/${id}?append_to_response=videos`
    )
    await waitFor(() => {
      expect(getByText(/Star Wars/)).toBeInTheDocument()
    })
  })
})
