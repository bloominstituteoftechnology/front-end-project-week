import React from 'react';
import { Link } from 'react-router-dom';
import '../components.css';
import './index.css';
const SideBar = () => {
  return (
    <div>
      <div className="sidebar-wrapper">
        <h1>Lambda<br />Notes</h1>
        <Link to="/"><button>View Your Notes</button></Link>
        <Link to="/notes/add"><button>+ Create Ne Note</button></Link>
      </div>
    </div>
  );
}

export default SideBar;
