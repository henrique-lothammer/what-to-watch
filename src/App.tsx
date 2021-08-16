import React from 'react'

import { ListsProvider } from './contexts/ListsContext'
import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'

function App(): React.ReactElement {
  return (
    <ListsProvider>
      <Routes />
      <GlobalStyle />
    </ListsProvider>
  )
}

export default App
