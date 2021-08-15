import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Details from 'pages/Details'

describe('Watch Later Page', () => {
  it('Should render', () => {
    const id = 1
    const history = createMemoryHistory()
    history.push(`/details/${id}`)
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[`/details/${id}`]} initialIndex={0}>
        <Route path='/details/:id'>
          <Details />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/details/i)
    expect(element).toBeInTheDocument()
  })
})
