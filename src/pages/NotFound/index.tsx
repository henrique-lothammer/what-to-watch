import React from 'react'

import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'

import { Title } from './styles'

const NotFound: React.FC = () => {
  return (
    <>
      <HeaderBar />
      <div className='wrapper'>
        <main data-testid='not-found'>
          <Title>404 - Page not found</Title>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
