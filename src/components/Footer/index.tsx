import React, { ReactElement } from 'react'

import { Container } from './styles'

const Footer = (): ReactElement => {
  return (
    <Container>
      Made with <span>&#x2764;</span>, TMDB and React
    </Container>
  )
}

export default Footer
