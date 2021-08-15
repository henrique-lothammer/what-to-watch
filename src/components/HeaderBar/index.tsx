import React, { ReactElement } from 'react'
import { FaStar, FaClock } from 'react-icons/fa'

import SearchBox from 'components/SearchBox'
import { getAllFavorites, getAllWatchLater } from 'services/Storage'

import logo from 'assets/logo.png'
import { colors } from 'styles/variables'
import {
  Container,
  LinkContainer,
  FavoriteBtn,
  WatchLaterBtn,
  Counter,
  ListsContainer,
} from './styles'

const HeaderBar = (): ReactElement => {
  const favorites = getAllFavorites()
  const watchLater = getAllWatchLater()

  return (
    <Container>
      <div className='wrapper center'>
        <LinkContainer to='/' title='Home'>
          <img src={logo} alt='Wath to Watch?' />
        </LinkContainer>
        <SearchBox />
        <ListsContainer>
          <FavoriteBtn to='/favorites' title='Favorites'>
            <FaStar color={colors.font} width={20} />
            {favorites?.length ? <Counter>{favorites.length}</Counter> : ''}
          </FavoriteBtn>
          <WatchLaterBtn to='/watchlater' title='Watch Later'>
            <FaClock color={colors.font} width={20} />
            {watchLater?.length ? <Counter>{watchLater?.length}</Counter> : ''}
          </WatchLaterBtn>
        </ListsContainer>
      </div>
    </Container>
  )
}

export default HeaderBar
