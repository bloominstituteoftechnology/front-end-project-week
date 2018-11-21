import React from 'react';
import '../Styles/styling.css';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Lambda Notes</h1>
      <Link to ="/">
      <div className="button">
        View Your Notes
      </div>
      </Link>
      <Link to="/add-note">
      <div className="button">
        + Create New Note
      </div>
      </Link>
    </div>
  );
}

export default Sidebar;