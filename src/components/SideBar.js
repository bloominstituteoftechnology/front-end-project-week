import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="left">
    <h1>Lambda Notes</h1>
    <Link to="/">
      <button className="sidebar-button">View Your Notes</button>
    </Link>
    <Link to="/new">
      <button className="sidebar-button">+ Create New Note</button>
    </Link>
  </div>
);
