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
        <button>View Your Notes </button>
      </div>
      <div>
        <button> + Create New Note </button>
      </div>
    </div>
  );
};
export default Nav;