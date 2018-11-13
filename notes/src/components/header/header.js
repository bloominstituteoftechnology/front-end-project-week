import React, { Component } from 'react';
import { Container, HeaderNav, Nav } from '../../style/style';
import { NavLink } from 'react-router-dom';
import logo from '../../../src/logo.png';


class Header extends Component {
  render() { 
    return ( 
      <Container>
        <HeaderNav>
          <div className='logo'>
            <NavLink to ='/'>
             <img src={logo} alt="logo"/>
            </NavLink>
          </div>
          <Nav>
            <NavLink to ='/Sign'>Sign in</NavLink>
            <NavLink to ='/help'>Help</NavLink>
          </Nav>
        </HeaderNav>
      </Container>
    );
  }
}

export default Header;