import React, { ReactElement } from 'react'
import { FaStar, FaClock } from 'react-icons/fa'

import SearchBox from 'components/SearchBox'
import { getAllFavorites, getAllWatchLater } from 'services/Storage'

import { colors } from 'styles/variables'
import logo from 'assets/logo.png'
import {
  Container,
  LinkContainer,
  FavoriteBtn,
  WatchLaterBtn,
  Counter,
  ListsContainer,
} from './styles'

interface IProps {
  isFavoritePage?: boolean
  isWatchLaterPage?: boolean
}

const HeaderBar = ({
  isFavoritePage = false,
  isWatchLaterPage = false,
}: IProps): ReactElement => {
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
            <FaStar width={20} color={isFavoritePage ? colors.active : ''} />
            {favorites?.length ? <Counter>{favorites.length}</Counter> : ''}
          </FavoriteBtn>
          <WatchLaterBtn to='/watchlater' title='Watch Later'>
            <FaClock width={20} color={isWatchLaterPage ? colors.active : ''} />
            {watchLater?.length ? <Counter>{watchLater?.length}</Counter> : ''}
          </WatchLaterBtn>
        </ListsContainer>
      </div>
    </Container>
  )
}

export default HeaderBar
