import React, { Component } from 'react';
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
  width: 240px;
  height: 40px;
  margin-bottom: 25px;
  border: 1px solid gray;
  background: #24b8bd;
  color: white;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const LogoutBtn = styled.button`
  border-radius: 5px;
  width: 90px;
  height: 30px;
  margin-bottom: 25px;
  border: 1px solid limegreen;
  color: green;
  font-weight: bold;
  font-size: 14px;
  
  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.div`
  border: 2px solid blue;
  margin: 200px auto;
  // margin: auto;
  width: 400px;
  height: 200px;
  background: lightskyblue;
  opacity: 0.6;
`;

const FormHeading = styled.h3`
  margin: 20px auto;
  border-bottom: 1px solid white;
  width: 300px;
  color: white;
  font-size: 22px;
`;

const LoginBtn = styled.button`
  border-radius: 5px;
  border: 1px solid dodgerblue;
  width: 100px;
  height: 30px;
  color: blue;
  font-weight: bold;
  font-size: 12px;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
  }
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
webAuth.parseHash((err, authResult) => {
  if (authResult) {
    // save the tokens from authResult in local storage or a cookie
    console.log('Auth Result:', authResult);
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('expires_at', expiresAt);
  } else if (err) {
    // handle errors
    console.log(err);
  }
});

class NavBar extends Component {
  render() {
    if (this.isAuthenticated()) {
      return (
        <NavbarContainer>
          <h1>Lambda Notes</h1>

          <Link to='/'>
            <NavButton>View Your Notes</NavButton>
          </Link>

          <Link to='/new'>
            <NavButton>+ Create New Note</NavButton>
          </Link>

          <LogoutBtn onClick={this.logout}>Log out</LogoutBtn>
        </NavbarContainer>
      );
    } else {
      return (
        <Form>
          <FormHeading>Login to Your Account</FormHeading>
          <LoginBtn 
            id='btn-login'
            onClick={function() {
              lock.show();
            }}
          >
            LOG IN
          </LoginBtn>
        </Form>
      );
    }
  }
  isAuthenticated() {
    // check whether the current time is past the access Token's expire time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  logout() {
    // clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    window.location.reload();
  }
}

export default NavBar;

// const NavBar = props => {
//   return (
//     <NavbarContainer>
//       <h1>Lambda Notes</h1>

//       <Link to='/'>
//         <NavButton>View Your Notes</NavButton>
//       </Link>

//       <Link to='/new'>
//         <NavButton>+ Create New Note</NavButton>
//       </Link>

//       <div 
//         onClick={function() {
//           lock.show();
//         }}
//       >
//         LOG IN
//       </div>
    
//     </NavbarContainer>
//   );
  
// }