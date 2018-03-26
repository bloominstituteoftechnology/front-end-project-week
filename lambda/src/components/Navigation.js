import React  from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="nav-bar">
        <Link to="/">View Your Notes</Link>
        <br />
        <Link to="/AddNote"> + Create New Note </Link>
      </div>
  );
};

export default Navigation;