import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Landing from '../pages/landing';
import Restaurants from '../pages/restaurants';

import Globals from '../Globals.json';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Globals.paths.root} component={Landing} />
        <Route exact path={Globals.paths.restaurants} component={Restaurants} />

        <Redirect exact from='*' to={Globals.paths.root} />
      </Switch>
    </BrowserRouter>
  )
}