import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { Button } from 'semantic-ui-react';

const Sidebar = () => {
  return (
    <nav className="Sidebar-container">
      <div className="Sidebar">
        <h1>Lambda Notes</h1>
        <div className="Sidebar-buttons">
        <Link to="/">
          <Button color="teal" className="Sidebar-button" >
            View Your Notes
          </Button>
        </Link>
        <Link to="/create">
          <Button color="teal" className="Sidebar-button">
            + Create New Note
          </Button>
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar;