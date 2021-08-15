import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Footer from 'components/Footer'

describe('Footer Component', () => {
  it('Should render', () => {
    const { container, getByTestId } = render(<Footer />)

    const element = getByTestId(/footer/i)
    expect(container.firstChild?.childNodes).toMatchSnapshot()
    expect(element).toBeInTheDocument()
  })
})
