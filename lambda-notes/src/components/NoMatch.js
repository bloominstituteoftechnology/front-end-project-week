import React from 'react';
import '../App.css';

const NoMatch = props => {
  const text = props.missing === "note" ? "Some jerk probably deleted it." : "This page doesn't exist.";
  return (
    <div className="main-container no-match">
      <h1>PAGE NOT FOUND</h1>
      <div className="error-text">{text}</div>
    </div>
  )
}

export default NoMatch;
