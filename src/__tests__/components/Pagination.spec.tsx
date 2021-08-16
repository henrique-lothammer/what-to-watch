import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Pagination from 'components/Pagination'

describe('Pagination Component', () => {
  it('Should render', () => {
    const prevPage = (p: number) => p
    const nextPage = (p: number) => p
    const { getByTestId } = render(
      <Pagination
        totalPages={10}
        page={2}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    )

    const element = getByTestId(/pagination/i)
    expect(element).toBeInTheDocument()
  })

  it('Should pagination work correctly when click buttons', () => {
    let page = 2
    function nextPage(p: number) {
      page = p
    }
    function prevPage(p: number) {
      page = p
    }
    const { getByTestId } = render(
      <Pagination
        totalPages={10}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    )
    fireEvent.click(getByTestId('button-next'))
    expect(page).toStrictEqual(3)
    fireEvent.click(getByTestId('button-prev'))
    expect(page).toStrictEqual(1)
  })
})
