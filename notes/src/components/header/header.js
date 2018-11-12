import React, { Component } from 'react';
import { Container, HeaderNav, Nav } from '../../style/style';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() { 
    return ( 
      <Container>
        <HeaderNav>
          <div className='logo'>
            <NavLink to ='/home'>
            <h1>Lambda<span>Note</span></h1>
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