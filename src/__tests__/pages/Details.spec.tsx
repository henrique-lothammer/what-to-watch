import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Details from 'pages/Details'
import Api from 'services/Api'
import axios, { AxiosResponse } from 'axios'

jest.mock('services/Api')
const mockedAxios = Api as jest.Mocked<typeof axios>

describe('Watch Later Page', () => {
  it('Should render', async () => {
    const response = {
      id: 1,
      popularity: 10312.289,
      poster_path: '/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
      release_date: '2021-07-28',
      title: 'Star Wars',
      genres: [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
      ],
      vote_average: 8.1,
      vote_count: 2036,
      videos: { results: [{ key: 'youtube-key', site: 'YouTube' }] },
    }

    const mockedResponse: AxiosResponse = {
      data: response,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    const id = 1
    const history = createMemoryHistory()
    history.push(`/details/${id}`)
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={[`/details/${id}`]} initialIndex={0}>
        <Route path='/details/:id'>
          <Details />
        </Route>
      </MemoryRouter>
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
