import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { Button } from 'reactstrap';

const SideBar = props => {
  return (
    <div className="sidebar">
      <h1 className="appName">Lambda Notes</h1>
      <Button className="sidebar-buttons">
        <Link to="/">
          <div>View Your Notes</div>
        </Link>
      </Button>
      <Button className="sidebar-buttons">
        <Link to="/CreateNote">
          <div>+ Create New Note</div>
        </Link>
      </Button>
    </div>
  );
};

export default SideBar;
