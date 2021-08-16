import React, { useContext } from 'react'
import { ListsContext } from 'contexts/ListsContext'

import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'
import PostersList from 'components/PostersList'

import { Title, Warning } from './styles'

const Favorites: React.FC = () => {
  const { favoriteList: movies } = useContext(ListsContext)
  return (
    <>
      <HeaderBar isFavoritePage />
      <div className='wrapper'>
        <main data-testid='favorites'>
          <Title>My Favorites</Title>
          {movies?.length ? (
            <>
              <PostersList movies={movies} />
            </>
          ) : (
            <Warning>no movies found : (</Warning>
          )}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Favorites
