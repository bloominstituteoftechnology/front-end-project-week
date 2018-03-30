import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Navigation extends Component {
  render() {
    return (
      // <div className='pl-0 ml-0'>
        <Col xs='3' className='NavBar px-0'>
            <h2 className="NavBar__title text-left px-3 mt-3" >Lambda <br></br> Notes</h2>
          <Nav>
            <NavItem className="d-flex justify-content-center mt-1">
              <NavLink tag={Link} to='/'><Button className='navButton font-weight-bold'>View Your Notes</Button></NavLink>
            </NavItem>
            <NavItem className="d-flex justify-content-center">
              <NavLink tag={Link} to='/add'><Button className='navButton font-weight-bold'>+ Create New Note</Button></NavLink>
            </NavItem>
          </Nav>
        </Col>
      // </div>
    )
  }
}



























// const Navigation = () => {
//   return (
//     // <div className='pl-0 ml-0'>
//       <Col xs='3' className='NavBar px-0'>
//           <h3 className="NavBar__title text-left font-weight-bold px-3 mt-3" >Lambda <br></br> Notes</h3>
//         <Nav>
//           <NavItem className="d-flex justify-content-center mt-1">
//             <NavLink tag={Link} to='/'><Button className='navButton font-weight-bold' block>View Your Notes</Button></NavLink>
//           </NavItem>
//           <NavItem className="d-flex justify-content-center">
//             <NavLink tag={Link} to='/add'><Button className='navButton font-weight-bold' block>+ Create New Note</Button></NavLink>
//           </NavItem>
//         </Nav>
//       </Col>
//     // </div>
//   )
// }
