import styled from 'styled-components'
import { colors } from 'styles/variables'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  background: ${colors.secondary};
  font-size: 1.8rem;
  padding: 10px 8px;
  border: none;
  border-radius: 3px;
  color: ${colors.font};
  font-weight: bold;
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
`
export const PageText = styled.h3`
  color: ${colors.font};
  font-weight: bold;
  text-align: center;
  min-width: 90px;
  padding: 20px 20px 10px;
`
