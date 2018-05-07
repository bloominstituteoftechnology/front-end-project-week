import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Notes.css";

export default class Sidebar extends Component {
  render() {
    return (
        <Col xs='3' className='NavBar px-0'>
            <h2 className="NavBar__title text-left px-3" >Lambda <br></br> Notes</h2>
          <Nav>
            <NavItem className="Navbar_Link d-flex justify-content-center mt-1 pr-2">
              <NavLink tag={Link} to='/'><Button color="info" className='navButton font-weight-bold'>View Your Notes</Button></NavLink>
            </NavItem>
            <NavItem className="Navbar_Link d-flex justify-content-center">
              <NavLink tag={Link} to='/add'><Button color="info" className='navButton font-weight-bold'>+ Create New Note</Button></NavLink>
            </NavItem>
          </Nav>
        </Col>
    )
  }
}