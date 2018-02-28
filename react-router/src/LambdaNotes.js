import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullNotes from './FullNotes'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const LambdaNotes = () => (
  <Switch>
    <Route exact path='/lambdanotes' component={FullNotes}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)


export default LambdaNotes
