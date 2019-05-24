import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Nav from './Nav'
import NavAuth from './NavAuth'

import './index.css'

const Navigation = ({
  toggle,
  redirect }) => {

  const TOKEN = localStorage.getItem('token')

  return (
    <div id='navigation'>
      <Link
        to='/'>
        <h1>Lambda<br />
        Notes</h1>
      </Link>
      {TOKEN
        ? <NavAuth
          key={1}
          toggle={toggle}
          redirect={redirect} />
        : <Nav
          key={1}
          toggle={toggle}
          redirect={redirect} />}
    </div>
  )
}

Navigation.propTypes = {
  toggle: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired
}

export default Navigation