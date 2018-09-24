import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <div className="sidebar-wrapper">
        <h1>Lambda<br />Notes</h1>
        <Link to="/"><button>View Your Notes</button></Link>
      </div>
    </div>
  );
}

export default SideBar;
