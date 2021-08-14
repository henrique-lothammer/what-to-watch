import styled from 'styled-components'

import { colors } from 'styles/variables'

interface IContainerProps {
  list: number
}

export const Container = styled.li`
  position: relative;
  width: 185px;
  height: 330px;
  display: flex;
  flex-direction: column;
  background: ${colors.bgLighter};
  ${(props: IContainerProps) =>
    props.list ? 'margin: 5px;' : 'margin-left: 15px;'}

  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`

export const Picture = styled.div`
  width: 185px;
  height: 255px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Title = styled.article`
  color: ${colors.font};
  font-weight: bold;
  width: 100%;
  height: 75px;
  padding: 10px 5px 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 1.5rem;
    text-align: center;
    overflow: hidden;
  }
`

export const Score = styled.div`
  background: ${colors.primary};
  color: ${colors.font};
  position: absolute;
  padding: 5px;
  border-radius: 100%;
  top: 5px;
  right: 5px;
  z-index: 2;
  width: 36px;
  height: 36px;
  text-align: center;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.6rem;
  box-shadow: 0 0 1em #000;
`
