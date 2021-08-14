import React from 'react'

import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'
import PostersList from 'components/PostersList'

import { getAllFavorites } from 'services/Storage'
import { Title } from './styles'

const Favorites: React.FC = () => {
  const movies = getAllFavorites()
  return (
    <>
      <HeaderBar />
      <div className='wrapper'>
        <main>
          <Title>My Favorites</Title>
          {movies ? (
            <>
              <PostersList movies={movies} />
            </>
          ) : (
            ''
          )}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Favorites
