import React, { Fragment } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Sidebar = () => {
  return (
    <Fragment>
      <Navbar inverse>
        <Nav>
          <LinkContainer to="/view">
            <NavItem>View Your Notes</NavItem>
          </LinkContainer>
          <LinkContainer to="/add">
            <NavItem>+ Create New Note</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    </Fragment>
  )
}

export default Sidebar
