import React from 'react';
import './nav.css'

const Nav = () => {
  return (
    <div className="nav_rail">
      <div className="title">
        <div>Lambda</div>
        <div>Notes</div>
      </div>
      <div>
        <button className="View-Button">View Your Notes </button>
      </div>
      <div>
        <button className="New-Note-Button"> + Create New Note </button>
      </div>
    </div>
  );
};
export default Nav;