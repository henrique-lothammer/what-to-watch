import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from 'styles/variables'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: ${colors.bgLighter};
  padding: 10px 10px;
  z-index: 99;
`

export const LinkContainer = styled(Link)`
  font-size: 1.6rem;
  width: 60px;
  margin-right: 10px;
`

export const FavoriteBtn = styled(Link)`
  display: block;
  position: relative;
  margin: 0 5px;
  svg {
    width: 30px;
  }
`

export const WatchLaterBtn = styled(Link)`
  display: block;
  position: relative;
  margin: 0 5px;
  svg {
    width: 30px;
  }
`

export const Counter = styled.div`
  position: absolute;
  color: #fff;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;
  background: #0a3949;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: -10px;
  top: 8px;
`
export const ListsContainer = styled.div`
  display: flex;
`
