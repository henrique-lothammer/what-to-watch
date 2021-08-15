import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from 'pages/Dashboard'
import Details from 'pages/Details'
import Search from 'pages/Search'
import Favorites from 'pages/Favorites'
import WatchLater from 'pages/WatchLater'
import NotFound from 'pages/NotFound'

const Routes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/details/:id' component={Details} />
        <Route path='/search' component={Search} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/watchlater' component={WatchLater} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
