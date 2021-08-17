import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Score from 'components/Score'

describe('Score Component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<Score score={10} />)

    const element = getByTestId(/score/i)
    expect(element).toBeInTheDocument()
  })
  it('Should render with props', () => {
    const { getByTestId } = render(<Score score={10} shadow top='10px' />)

    const element = getByTestId(/score/i)
    expect(element).toBeInTheDocument()
  })
})
