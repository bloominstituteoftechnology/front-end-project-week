import React from 'react';
import '../Styles/styling.css';
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <h1>Lambda Notes</h1>
      <Link to onClick={props.refresh} to ="/">
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