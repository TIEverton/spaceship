import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Space from '../pages/Space'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/space" exact component={Space} />
    </Switch>
  )
}
