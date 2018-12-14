import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <h1>Lambda Notes</h1>
      <Link onClick={props.refresh} to="/">
      <div className="button">
        View Your Notes
      </div>
      </Link>
      <Link to="/create-new">
      <div className="button">
        + Create New Note
      </div>
      </Link>
     
    </div>
  );
}

export default Sidebar;