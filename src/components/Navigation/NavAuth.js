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

const NavAuth = ({ isOpen, toggle }) => {
  const USER_ID = localStorage.getItem('userId')

  return (
    <Navbar
      className='navigation'
      expand='md'>
      <NavbarBrand
        className='navigation-header'
        tag={Link}
        to={`/${USER_ID}`}>
        <h1>Lambda</h1>
        <h1>Notes</h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar>
        <Nav
          className='ml-auto'
          navbar>
          <NavItem
            tag={Link}
            to={`/${USER_ID}`}>
            <button>View Your Notes</button>
          </NavItem>
          <NavItem
            tag={Link}
            to={`/${USER_ID}/createnote`}>
            <button>+ Create New Note</button>
          </NavItem>
          <NavItem>
            <button
              className='logout'
              onClick={this.logout}>
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
  toggle: PropTypes.func.isRequired
}

export default NavAuth