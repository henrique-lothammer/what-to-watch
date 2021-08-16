import React, { useContext } from 'react'
import { ListsContext } from 'contexts/ListsContext'

import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'
import PostersList from 'components/PostersList'

import { Title, Warning } from './styles'

const WatchLater: React.FC = () => {
  const { watchLaterList: movies } = useContext(ListsContext)
  return (
    <>
      <HeaderBar isWatchLaterPage />
      <div className='wrapper'>
        <main data-testid='watch-later'>
          <Title>Movies to Watch Later</Title>
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

export default WatchLater
