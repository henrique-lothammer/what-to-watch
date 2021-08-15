import React from 'react'

import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'
import PostersList from 'components/PostersList'

import { getAllWatchLater } from 'services/Storage'
import { Title } from './styles'

const WatchLater: React.FC = () => {
  const movies = getAllWatchLater()
  return (
    <>
      <HeaderBar />
      <div className='wrapper'>
        <main data-testid='watch-later'>
          <Title>Movies to Watch Later</Title>
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

export default WatchLater
