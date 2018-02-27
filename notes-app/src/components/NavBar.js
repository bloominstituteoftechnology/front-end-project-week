import React from 'react';
import NavLink from 'react-router-dom';

function Nav() {
  return (
    <div className="Home__Left">
      <div className="Home__Left__Text">
        <b>Lambda</b>
        <br/>
        <b>Notes</b>
      </div>
      <div className="button Home__NoteButton">
        <b>View Your Notes</b>
      </div>
      <div className="button Home__NoteButton">
        <b>+ Create New Note</b>
      </div>
    </div>
  )
}

export default Nav;
