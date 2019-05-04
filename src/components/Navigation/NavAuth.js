import React from 'react'
import {
  Button,
  Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavAuth = ({
  USER_ID,
  toggle,
  redirect
}) => {
  const logOut = () => {
    const TOKEN = localStorage.getItem('jwt')

    if (TOKEN) {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userId')
      redirect('/')
    }
  }

  return (
    [<Button
      key={0}
      as={Link}
      to={`/${USER_ID}`}
      className='pacific-blue hide-btn'>
      View Notes
    </Button>,
    <Button
      key={1}
      as={Link}
      to={`/${USER_ID}/createnote`}
      className='pacific-blue hide-btn'>
      + Create Note
    </Button>,
    <Button
      key={2}
      className='milano-red hide-btn'
      onClick={logOut}>
      Log Out
    </Button>,
    <Icon
      key={3}
      className='toggle-btn'
      name='sidebar'
      size='big'
      onClick={toggle} />]
  )
}

NavAuth.propTypes = {
  USER_ID: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
}

export default NavAuth