import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import SearchBox from 'components/SearchBox'

describe('SearchBox Component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<SearchBox />)

    const element = getByTestId(/search-box/i)
    expect(element).toBeInTheDocument()
  })

  it('Should search when submitted', () => {
    const history = createMemoryHistory()
    const { container, getByTestId } = render(
      <Router history={history}>
        <SearchBox />
      </Router>
    )

    const input = container.querySelector('input[type=text]')
    const searchBar = getByTestId(/search-box/i).querySelector('button')

    if (input)
      fireEvent.change(input, {
        target: { value: 'test' },
      })
    if (searchBar) fireEvent.click(searchBar)
    const expectedUrl = `${history.location.pathname}${history.location.search}`
    expect(expectedUrl).toEqual('/search?q=test')
  })

  it('Should not search invalid submitted data', () => {
    const history = createMemoryHistory()
    const { container, getByTestId } = render(
      <Router history={history}>
        <SearchBox />
      </Router>
    )

    const input = container.querySelector('input[type=text]')
    const searchBar = getByTestId(/search-box/i).querySelector('button')

    if (input)
      fireEvent.change(input, {
        target: { value: '' },
      })
    if (searchBar) fireEvent.click(searchBar)
    const expectedUrl = `${history.location.pathname}${history.location.search}`
    expect(expectedUrl).not.toEqual('/search?q=')
  })
})
