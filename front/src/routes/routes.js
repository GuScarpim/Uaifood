import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Landing from '../pages/landing';

import Globals from '../Globals.json';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Globals.paths.root} component={Landing} />

        <Redirect exact from='*' to={Globals.paths.root} />
      </Switch>
    </BrowserRouter>
  )
}