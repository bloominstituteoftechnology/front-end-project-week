import React from 'react';
import '../App.css';

const NoMatch = props => {
  // set error text according to the current error
  const text = props.missing === "note" ? "This note doesn't exist." : "This page doesn't exist.";
  return (
    <div className="main-container no-match">
      <h1>PAGE NOT FOUND</h1>
      <div className="error-text">{text}</div>
    </div>
  )
}

export default NoMatch;
