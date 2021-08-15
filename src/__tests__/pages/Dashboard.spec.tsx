import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Dashboard from 'pages/Dashboard'

describe('Dashboard Page', () => {
  it('Should render', () => {
    const history = createMemoryHistory()
    history.push(`/`)
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Route path='/'>
          <Dashboard />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/dashboard/i)
    expect(element).toBeInTheDocument()
  })
})
