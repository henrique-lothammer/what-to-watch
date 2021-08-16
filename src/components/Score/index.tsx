import React, { ReactElement } from 'react'

import { Container } from './styles'

interface IProps {
  score?: number
  shadow?: boolean
  top?: string
}

const defaultProps: IProps = {
  score: 0,
  shadow: true,
  top: '10px',
}

const Score = ({
  shadow = true,
  top = '10px',
  score,
}: IProps): ReactElement => {
  return (
    <Container shadow={shadow} top={top} data-testid='score'>
      {score}
    </Container>
  )
}

Score.defaultProps = defaultProps

export default Score
