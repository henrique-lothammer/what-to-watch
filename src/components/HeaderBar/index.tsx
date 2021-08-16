import React, { ReactElement, useContext } from 'react'
import { FaStar, FaClock } from 'react-icons/fa'

import SearchBox from 'components/SearchBox'

import { colors } from 'styles/variables'
import { ListsContext } from 'contexts/ListsContext'
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
  const { favoriteList, watchLaterList } = useContext(ListsContext)

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
            {favoriteList?.length ? (
              <Counter>{favoriteList.length}</Counter>
            ) : (
              ''
            )}
          </FavoriteBtn>
          <WatchLaterBtn to='/watchlater' title='Watch Later'>
            <FaClock width={20} color={isWatchLaterPage ? colors.active : ''} />
            {watchLaterList?.length ? (
              <Counter>{watchLaterList?.length}</Counter>
            ) : (
              ''
            )}
          </WatchLaterBtn>
        </ListsContainer>
      </div>
    </Container>
  )
}

export default HeaderBar
