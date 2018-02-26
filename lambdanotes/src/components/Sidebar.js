import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <h1>Lambda Notes</h1>
      <Link to={"/"}>View Your Notes</Link>
      <Link to={"/create"}>+ Create New Note</Link>
    </div>
  )
}

export default Sidebar;
