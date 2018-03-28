import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navContainer">
    <h1 className="navHeader">Lambda<br />Notes</h1>
    <Link to="/"><button className="navButton">View Your Notes</button></Link>
    <Link to="/create"><button className="navButton">+ Create New Note</button></Link>
  </div>
);

export default Navigation;
