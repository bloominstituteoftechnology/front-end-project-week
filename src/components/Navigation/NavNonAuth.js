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
      expand='sm'>
      <NavbarBrand
        className='navigation-header'
        tag={Link}
        to='/'>
        <h1>Lambda</h1>
        <h1>Notes</h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem tag={Link} to='/signup'>
            <button className='signup'>Sign Up</button>
          </NavItem>
          <NavItem tag={Link} to='/login'>
            <button className='login'>Log In</button>
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