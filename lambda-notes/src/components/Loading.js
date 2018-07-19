import React from 'react';
import '../App.css';
import logo from '../logo.svg';

const Loading = props => {
  return (
    <div className="main-container loading">
      <img src={logo} className="react-spinner" alt="logo" />
    </div>
  )
}

export default Loading;
