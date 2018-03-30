import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className="navbar__container">
      <div className="title">
        <div>Lambda</div>
        <div>Notes</div>
      </div>
      <div>
        <button className="navBar__button" onClick={() => props.changeSwitch('','noteList')} >View Your Notes</button>
      </div>
      <div>
        <button className="navBar__button" onClick={() => props.changeSwitch('', 'createNote')} >+ Create New Note</button>
      </div>
    </div>
  );
};

export default NavBar;