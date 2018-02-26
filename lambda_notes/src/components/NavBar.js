import React from 'react';
import './navbar.css';

const NavBar = (props) => {
  return (
    <div className="navbar__container">
      <div className="title">
        <div>Lambda</div>
        <div>Notes</div>
      </div>
      <div>
        <button onClick={() => props.changeSwitch('Your Notes:','noteList')} >View Your Notes</button>
      </div>
      <div>
        <button onClick={() => props.changeSwitch('Create New Note:', 'createNote')} >+ Create New Note</button>
      </div>
    </div>
  );
};

export default NavBar;