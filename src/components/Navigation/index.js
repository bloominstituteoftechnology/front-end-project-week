import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Nav from './Nav'
import NavAuth from './NavAuth'

import './index.css'

const Navigation = ({
  toggle,
  redirect
}) => {
  const USER_ID = localStorage.getItem('userId')

  const TOKEN = localStorage.getItem('jwt')

  return (
    <div id='navigation'>
      {TOKEN && USER_ID
        ? [<Link
          key={0}
          to={`/${USER_ID}`}>
          <h1>Lambda<br />
          Notes</h1>
        </Link>,
        <NavAuth
          key={1}
          USER_ID={USER_ID}
          toggle={toggle}
          redirect={redirect}
        />]
        : [<Link
          key={0}
          to='/'>
          <h1>Lambda<br />
          Notes</h1>
        </Link>,
        <Nav
          key={1}
          toggle={toggle}
          redirect={redirect} />]}
    </div>
  )
}

Navigation.propTypes = {
  toggle: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired
}

export default Navigation
