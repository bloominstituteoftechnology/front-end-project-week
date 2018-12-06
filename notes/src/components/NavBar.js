import React from 'react';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <h1>Lambda Notes</h1>
      <div
        className="menu"
        onClick={() => {props.history.push('/')}}
      >
        View Your Notes
      </div>
      <div
        className="menu"
        onClick={() => {props.history.push('/add')}}
      >
        + Create New Note
      </div>
    </div>
  );
}

export default NavBar;