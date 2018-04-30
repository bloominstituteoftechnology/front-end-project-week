import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navDiv">
      <h2>Lambda Notes</h2>
      <Nav vertical>
        <Link to="/" className="addNavLinks homeLink">
          View Your Notes
        </Link>

        <Link to="/add" className="addNavLinks">
          + Create New Note
        </Link>

        <Link
          to="/"
          className="addNavLinks"
          onClick={() => {
            console.log('Downloaded CSV');
          }}
        >
          Download CSV
        </Link>
      </Nav>
    </div>
  );
};

export default Navigation;