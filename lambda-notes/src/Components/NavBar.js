import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Auth0Lock } from 'auth0-lock';
import auth0 from 'auth0-js';

const NavbarContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  height: 610px;
  background: #D3D2D3;
`;

const NavButton = styled.button`
  width: 180px;
  height: 40px;
  margin-bottom: 25px;
  border: 1px solid gray;
  background: #24b8bd;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

var lock = new Auth0Lock(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_DOMAIN_URL
);

var webAuth = new auth0.WebAuth({
  domain: process.env.REACT_APP_DOMAIN_URL,
  clientID: process.env.REACT_APP_CLIENT_ID,
  redirectUri: 'http://localhost:3000/callback'
});

const NavBar = props => {
  return (
    <NavbarContainer>
      <h1>Lambda Notes</h1>

      <Link to='/'>
        <NavButton>View Your Notes</NavButton>
      </Link>

      <Link to='/new'>
        <NavButton>+ Create New Note</NavButton>
      </Link>

      <div 
        onClick={function() {
          lock.show();
        }}
      >
        LOG IN
      </div>
    
    </NavbarContainer>
  );
}

export default NavBar;