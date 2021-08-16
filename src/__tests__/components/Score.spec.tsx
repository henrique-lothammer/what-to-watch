import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Score from 'components/Score'

describe('Score Component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<Score>10</Score>)

    const element = getByTestId(/score/i)
    expect(element).toBeInTheDocument()
  })
})
