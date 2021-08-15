import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Favorites from 'pages/Favorites'

describe('Favorites Page', () => {
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
})
