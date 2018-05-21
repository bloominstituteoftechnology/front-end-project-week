import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function Nav() {
  return (
    <div className="Home__Left">
      <div className="Home__Left__Text">
        <b>Lambda</b>
        <br/>
        <b>Notes</b>
      </div>
      <NavLink activeClassName='NavButton' to='/viewnotes'>
        <div className="button Home__NoteButton">
          <b>View Your Notes</b>
        </div>
      </NavLink>
        <NavLink activeClassName='NavButton' to='/createnote'>
          <div className="button Home__NoteButton">
            <b>+ Create New Note</b>
          </div>
      </NavLink>
    </div>
  )
}

export default Nav;

/*import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftColumnPanel() {
	return (
			<div className="LeftColumnPanel">
			<p> Lambda Notes </p>
			<button>View Your Notes</button><br />
      <button>+Create New Note</button>
		</div>
		);
};
export default LeftColumnPanel; */