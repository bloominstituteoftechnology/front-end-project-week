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
            <Button className='pacific-blue'>Sign Up</Button>
          </NavItem>
          <NavItem tag={Link} to='/login'>
            <Button className='pacific-blue'>Log In</Button>
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