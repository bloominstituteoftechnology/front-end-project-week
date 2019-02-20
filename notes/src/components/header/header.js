import React, { Component } from 'react';
import { Container, HeaderNav, Nav}  from '../../style/style';
import { NavLink } from 'react-router-dom';
import logo from '../../../src/logo.png';


class Header extends Component {
  render() { 
    const token = localStorage.getItem('jwt');
    if (token) {
      return ( 
        <Container>
          <HeaderNav>
            <div className='logo'>
              <NavLink to ='/notes'>
               <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            <Nav>
              <NavLink to ='/'>Login</NavLink>
              <NavLink to ='/register'>Register</NavLink>
            </Nav>
          </HeaderNav>
        </Container>
      );
    } else {
      return ( 
        <Container>
          <HeaderNav>
            <div className='logo'>
              <NavLink to ='/notes'>
               <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            <Nav>
              <NavLink to ='/register'>Register</NavLink>
              <NavLink to ='/help'>Help</NavLink>
            </Nav>
          </HeaderNav>
        </Container>
      );
    }
  }
}

export default Header;