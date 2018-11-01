import React from 'react';
import styled from 'styled-components';
import img from '../assets/kobu-agency-651905-unsplash.jpg';
import { Auth0Lock } from 'auth0-lock';
import auth0 from 'auth0-js';

var lock = new Auth0Lock(
    process.env.REACT_APP_CLIENT_ID,
    process.env.REACT_APP_DOMAIN_URL
);
  
var webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_DOMAIN_URL,
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: "http://localhost:3000/callback"
});
  
webAuth.parseHash((err, authResult) => {
    if (authResult) {
      // console.log(authResult);
      // Save the tokens from the authResult in local storage or a cookie
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("expires_at", expiresAt);
    } else if (err) {
      // Handle errors
      console.log(err);
    }
});

const NotesAuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${img});
  background-size: 100% 100%;
`;

const NotesAuthContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const NotesAuthHeader = styled.h1`
  margin-top: 15%;
  margin-left: 1%;
  font-family: "Planet Benson", Arial, sans-serif;
  font-size: 3.2rem;
  font-weight: normal;
`;

const NotesAuthSubheader = styled.h4`
  margin-top: 3%;
  font-size: 1.6rem;
`;

const NotesAuthButton = styled.button`
  margin-top: 3%;
  color: black;
  text-decoration: none;
  background-color: Transparent;
  border: none;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
      outline: 0;
  }
`;

const NotesAuth = (props) => {
  return (
    <NotesAuthContainer>
      <NotesAuthContent>
        <NotesAuthHeader>Lambda Notes</NotesAuthHeader>
        <NotesAuthSubheader>{props.welcome ? "Record Knowledge." : "Authentication Error." }</NotesAuthSubheader>
        <NotesAuthButton onClick={function() { lock.show(); }}>Login</NotesAuthButton>
      </NotesAuthContent>
    </NotesAuthContainer>
  );
}

export default NotesAuth;