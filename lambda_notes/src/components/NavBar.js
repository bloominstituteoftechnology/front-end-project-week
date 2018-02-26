import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar__container">
      <div className="title">
        <div>Lambda</div>
        <div>Notes</div>
      </div>
      <div>
        <button>View Your Notes</button>
      </div>
      <div>
        <button>+ Create New Note</button>
      </div>
    </div>
  );
};

export default NavBar;