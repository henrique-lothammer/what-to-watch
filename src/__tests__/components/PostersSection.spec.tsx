import React from 'react'
import { render, waitFor } from '@testing-library/react'
import PostersSection from 'components/PostersSection'
import Api from 'services/Api'
import axios, { AxiosResponse } from 'axios'

jest.mock('services/Api')
const mockedAxios = Api as jest.Mocked<typeof axios>

jest.mock('services/Api')

describe('PostersSection Component', () => {
  const section = {
    title: 'Most popular',
    query: '/discover/movie?sort_by=popularity.desc',
  }

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
    }

    const mockedResponse: AxiosResponse = {
      data: response,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    const { getByTestId, getByText } = render(
      <PostersSection section={section} />
    )

    const element = getByTestId(/posters-section/i)
    expect(element).toBeInTheDocument()
    expect(mockedAxios.get).toHaveBeenCalledWith(section.query)
    await waitFor(() => {
      expect(getByText(/Star Wars/)).toBeInTheDocument()
    })
  })

  it('Should render error when get no response', async () => {
    const response = {
      results: '',
    }

    const mockedResponse: AxiosResponse = {
      data: response,
      status: 404,
      statusText: 'OK',
      headers: {},
      config: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    const { getByTestId, getByText } = render(
      <PostersSection section={section} />
    )

    const element = getByTestId(/posters-section/i)
    expect(element).toBeInTheDocument()
    expect(mockedAxios.get).toHaveBeenCalledWith(section.query)
    await waitFor(() => {
      expect(
        getByText(/Ops! An error ocurred. Please, try again later./i)
      ).toBeInTheDocument()
    })
  })
})
