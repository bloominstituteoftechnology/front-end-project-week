import React from 'react'
import { Link } from 'react-router-dom'

const Router = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/View Your Notes'>View Your Notes</Link></li>
        <li><Link to='/Create New Note'>Create New Note</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
