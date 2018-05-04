// React and Router
import React from 'react';
import { Link } from 'react-router-dom';

// Styling
import './Nav.css';

const Nav = () => {
  return (
    <div className="navigation">
      <h1>
        Lambda<br />Notes
      </h1>
      <Link to="/notes" className="link">
        View Your Notes
      </Link>
      <Link to="/create-new-note" className="link">
        + Create New Note
      </Link>
      <Link to="/logout" className="link">
        + User Logout
      </Link>
      <Link to="/login" className="link">
        + User Login
      </Link>
    </div>
  );
}; // end of Nav

export default Nav;
