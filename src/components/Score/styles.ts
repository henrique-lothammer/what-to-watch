import styled from 'styled-components'

import { colors } from 'styles/variables'

interface IProps {
  top: string
  shadow: boolean
}

export const Container = styled.div`
  background: ${colors.primary};
  color: ${colors.font};
  position: absolute;
  padding: 5px;
  border-radius: 100%;
  top: ${(props: IProps) => (props.top ? props.top : '5px')};
  right: 5px;
  z-index: 2;
  width: 36px;
  height: 36px;
  text-align: center;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.6rem;
  ${(props: IProps) => props.shadow && 'box-shadow: 0 0 1em #000;'};
`
