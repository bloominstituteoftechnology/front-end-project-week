import React  from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="nav-bar">
        <Link className = 'link' to="/">View Your Notes</Link>
        <br />
        <Link  to = '/AddNote' className = 'link'> + Create New Note </Link>
      </div>
  );
};

export default Navigation;