import React from 'react'
import {
  Button,
  Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({ toggle }) => (
  [<Button
    key={0}
    as={Link}
    className='pacific-blue hide-btn'
    to='/signup'>
    Sign Up
  </Button>,
  <Button
    key={1}
    as={Link}
    className='pacific-blue hide-btn'
    to='/login'>
    Log In
  </Button>,
  <Icon
    key={2}
    className='toggle-btn'
    name='sidebar'
    size='big'
    onClick={toggle} />]
)

Nav.propTypes = { toggle: PropTypes.func.isRequired }

export default Nav