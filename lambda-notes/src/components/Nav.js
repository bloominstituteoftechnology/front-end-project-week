import React from 'react';
import { Col, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navigation = () => {
  return (
    // <div className='pl-0 ml-0'>
      <Col xs='3' className='NavBar px-0'>
          <h3 className="NavBar__title d-flex justify-content-start px-3 mt-3" >Lambda Notes</h3>
        <Nav>
          <NavItem className="d-flex justify-content-center">
            <NavLink tag={Link} to='/'><Button className='navButton'>View Your Notes</Button></NavLink>
          </NavItem>
          <NavItem className="d-flex justify-content-center">
            <NavLink tag={Link} to='/add'><Button className='navButton'>+ Create New Note</Button></NavLink>
          </NavItem>
        </Nav>
      </Col>
    // </div>
  )
}

export default Navigation;