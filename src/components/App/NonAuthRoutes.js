import React from 'react'
import { Route } from 'react-router-dom'

import About from '../About/'
import Signup from '../Signup/'
import Login from '../Login/'

const NonAuthRoutes = () => (
  <div className='content-container'>
    <Route
      exact path='/'
      component={About} />
    <Route
      exact path='/signup'
      component={Signup} />
    <Route
      exact path='/login'
      component={Login} />
  </div>
)

export default NonAuthRoutes