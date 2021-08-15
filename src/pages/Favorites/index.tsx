import React from 'react'

import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'
import PostersList from 'components/PostersList'

import { getAllFavorites } from 'services/Storage'
import { Title, Warning } from './styles'

const Favorites: React.FC = () => {
  const movies = getAllFavorites()
  return (
    <>
      <HeaderBar />
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
