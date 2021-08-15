import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import NotFound from 'pages/NotFound'

describe('Not Found Page', () => {
  it('Should render', () => {
    const history = createMemoryHistory()
    history.push(`/abc`)
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/abc']} initialIndex={0}>
        <Route path='/abc'>
          <NotFound />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/not-found/i)
    expect(element).toBeInTheDocument()
  })
})
