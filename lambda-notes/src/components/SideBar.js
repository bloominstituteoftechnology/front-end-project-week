import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1>Lambda <br/> Notes</h1>
      
      <ul>
        <li><button disabled="disabled">View Your Notes</button></li>
        <li><button disabled="disabled">+ Create New Note</button></li>
        <li><button disabled="disabled">Click Me Too</button></li>
      </ul>
    </div>
  )
}

export default SideBar;