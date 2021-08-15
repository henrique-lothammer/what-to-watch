import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import PostersList from 'components/PostersList'

describe('PosterList Component', () => {
  const movies = [
    {
      id: 1,
      title: 'Movie test',
      posterPath: 'https://test.url.com',
      voteAverage: 10,
    },
    {
      id: 2,
      title: 'Movie test 2',
      posterPath: 'teste.path',
      voteAverage: 7,
    },
  ]
  it('Should render', () => {
    const { getByTestId } = render(<PostersList movies={movies} />)

    const element = getByTestId(/posters-list/i)
    expect(element).toBeInTheDocument()
  })
})
