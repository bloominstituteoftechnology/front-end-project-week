import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
            <Button className='pacific-blue'>View Notes</Button>
          </NavItem>
          <NavItem
            tag={Link}
            to={`/${USER_ID}/createnote`}>
            <Button className='pacific-blue'>+ Create Note</Button>
          </NavItem>
          <NavItem>
            <Button
              className='milano-red'
              onClick={logOut}>
              Log Out
            </Button>
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