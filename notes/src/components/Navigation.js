import React from 'react';
import './Navigation.css';

const Navigation = () => (
  <div className="navContainer">
    <h1 className="navHeader">Lambda<br />Notes</h1>
    <button className="navButton">View Your Notes</button>
    <button className="navButton">+ Create New Note</button>
  </div>
);

export default Navigation;
