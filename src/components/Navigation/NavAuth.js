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

const NavAuth = ({ isOpen, toggle, logOut }) => {
  const USER_ID = localStorage.getItem('userId')

  return (
    <Navbar
      className='navigation'
      expand='md'
      light>
      <NavbarBrand
        className='navigation-header'
        tag={Link}
        to={`/${USER_ID}`}>
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
            to={`/${USER_ID}`}>
            <button className='view-button'>View Notes</button>
          </NavItem>
          <NavItem
            tag={Link}
            to={`/${USER_ID}/createnote`}>
            <button className='create-button'>+ Create Note</button>
          </NavItem>
          <NavItem>
            <button
              className='logout-button'
              onClick={logOut}>
              Log Out
            </button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

NavAuth.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
}

export default NavAuth