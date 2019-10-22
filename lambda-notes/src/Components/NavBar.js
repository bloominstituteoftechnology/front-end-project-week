import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

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

const CSVBtn = styled.button`
  border-radius: 5px;
  width: 130px;
  height: 30px;
  margin-right: 10px;
  border: 1px solid blue;
  color: green;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

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
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        id: '',
        title: '',
        textBody: '',
      },
    }
  };

  render() {
    console.log('NOTES:', this.props.notes);
    return (
      <NavbarContainer>
        <h1>Lambda Notes</h1>

        <Link to='/'>
          <NavButton>View Your Notes</NavButton>
        </Link>

        <Link to='/new'>
          <NavButton>+ Create New Note</NavButton>
        </Link>

        <CSVBtn>
          <CSVLink filename={'notes.csv'} data={this.props.notes}>Download Notes</CSVLink>
        </CSVBtn>
        <LogoutBtn onClick={this.logout}>Log out</LogoutBtn>
      </NavbarContainer>
    );
  }
  logout() {
    // clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    window.location.reload();
  }
}

export default NavBar;