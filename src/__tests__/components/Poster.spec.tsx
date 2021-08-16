import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Poster from 'components/Poster'
import 'jest-styled-components'

describe('Poster Component', () => {
  afterEach(cleanup)
  const movie = {
    id: 1,
    title: 'Movie test',
    posterPath: 'teste.path',
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
})
