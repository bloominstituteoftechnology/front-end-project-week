import React from 'react'

import Navigation from '../Navigation/'
import AuthRoutes from './AuthRoutes'
import NonAuthRoutes from './NonAuthRoutes'

import './index.css'

const App = () => {
  const TOKEN = localStorage.getItem('jwt')
  const USER_ID = localStorage.getItem('userId')
  return (
    <div className="app">
      <Navigation />
      {TOKEN && USER_ID
        ? <AuthRoutes />
        : <NonAuthRoutes />}
    </div>
  )
}

export default App
