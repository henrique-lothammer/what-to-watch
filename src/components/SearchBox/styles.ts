import styled from 'styled-components'

import { colors } from 'styles/variables'

export const Form = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.bgLighter};
  padding: 10px 10px;
`

export const Input = styled.input`
  font-size: 1.6rem;
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 3px 0 0 3px;
  &::placeholder {
    color: ${colors.placeholder};
    font-weight: bold;
    font-size: 14px;
  }
`

export const SubmitButton = styled.button`
  max-width: 50px;
  border-radius: 0 3px 3px 0;
  padding: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
`
