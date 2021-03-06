import React from 'react'
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Search from 'pages/Search'
import Api from 'services/Api'
import axios, { AxiosResponse } from 'axios'

jest.mock('services/Api')
const mockedAxios = Api as jest.Mocked<typeof axios>

describe('Search Page', () => {
  it('Should render', async () => {
    const response = {
      results: [
        {
          id: 1,
          popularity: 10312.289,
          poster_path: '/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
          release_date: '2021-07-28',
          title: 'Star Wars',
          video: false,
          vote_average: 8.1,
          vote_count: 2036,
        },
      ],
      total_results: 1,
      total_pages: 1,
    }

    const mockedResponse: AxiosResponse = {
      data: response,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    const history = createMemoryHistory()
    history.push(`/`)
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={['/search?q=star']} initialIndex={0}>
        <Route path='/search'>
          <Search />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/search-page/i)
    expect(element).toBeInTheDocument()
    expect(Api.get).toHaveBeenCalledWith(`/search/movie?query=star&page=1`)
    await waitFor(async () => {
      expect(getByText(/Star Wars/)).toBeInTheDocument()
    })
  })

  it('Should redirect when dont have a query', () => {
    const history = createMemoryHistory()
    history.push(`/`)
    render(
      <MemoryRouter initialEntries={['/search']} initialIndex={0}>
        <Route path='/search'>
          <Search />
        </Route>
      </MemoryRouter>
    )

    const expectedUrl = `${history.location.pathname}${history.location.search}`
    expect(expectedUrl).toEqual('/')
  })
})
