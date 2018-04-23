import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="title">Lambda Notes</h1>
      <Link to="/NotesList">
        <button className="buttons">View Your Notes</button>
      </Link>
      <Link to="/CreateANote">
        <button className="buttons">+Create New Note</button>
      </Link>
    </div>
  );
};

export default SideBar;
