import React from 'react';
import '../styles/ErrorPage.css';
import logo from '../logo.svg';

export const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <p className="ErrorPage_title">404</p>
      <div className="ErrorPage_body">
        <p>Either the note or url path that you have reached<br/>
          is not included in this application currently</p>
        <p>Please navigate back to a valid page with the<br/>
          buttons to the left of the screen</p>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}
