import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap'
import PropTypes from 'prop-types'

import './index.css'

const NavNonAuth = ({ isOpen, toggle }) => {
  return (
    <Navbar
      className='navigation'
      expand='md'
      light>
      <NavbarBrand
        className='navigation-header'
        tag={Link}
        to='/'>
        <h1>Lambda</h1>
        <h1>Notes</h1>
      </NavbarBrand>
      <NavbarToggler
        className='toggler'
        onClick={toggle} />
      <Collapse
        className='navigation-collapse'
        isOpen={isOpen}
        navbar>
        <Nav
          className='navigation-items'
          navbar>
          <NavItem
            tag={Link}
            to='/signup'>
            <button className='signup-button'>Sign Up</button>
          </NavItem>
          <NavItem tag={Link} to='/login'>
            <button className='login-button'>Log In</button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

NavNonAuth.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default NavNonAuth