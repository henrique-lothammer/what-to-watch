import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import WatchLater from 'pages/WatchLater'

describe('Watch Later Page', () => {
  it('Should render', () => {
    const history = createMemoryHistory()
    history.push(`/watchlater`)
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/watchlater']} initialIndex={0}>
        <Route path='/'>
          <WatchLater />
        </Route>
      </MemoryRouter>
    )

    const element = getByTestId(/watch-later/i)
    expect(element).toBeInTheDocument()
  })
})
