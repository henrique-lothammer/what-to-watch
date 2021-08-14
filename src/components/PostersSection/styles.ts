import styled from 'styled-components'

import { colors } from 'styles/variables'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-bottom: 5px;
`

export const Title = styled.h2`
  color: ${colors.font};
  font-weight: bold;
  width: 100%;
  padding-bottom: 10px;
`
export const PosterList = styled.ul`
  display: flex;
  overflow-x: auto;
  min-height: 355px;
  padding-bottom: 15px;
  min-width: 100%;
`
