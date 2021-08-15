import React from 'react'
import { render } from '@testing-library/react'
import PostersSection from 'components/PostersSection'
import Api from 'services/Api'
import { AxiosResponse } from 'axios'

jest.mock('services/Api')

describe('PostersSection Component', () => {
  const section = {
    title: 'Most popular',
    query: '/discover/movie?sort_by=popularity.desc',
  }

  it('Should render', async () => {
    const { getByTestId } = render(<PostersSection section={section} />)

    const response = {
      results: [
        {
          id: 1,
          popularity: 10312.289,
          poster_path: '/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
          release_date: '2021-07-28',
          title: 'The Suicide Squad',
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

    Api.get.mockResolvedValueOnce(mockedResponse)

    const element = getByTestId(/posters-section/i)
    expect(element).toBeInTheDocument()
    expect(Api.get).toHaveBeenCalledWith(section.query)
  })
})
