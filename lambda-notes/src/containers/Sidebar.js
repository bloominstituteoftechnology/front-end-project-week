import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-3 sidebar">
        <h1>Lambda Notes</h1>
        <Link to="/">
          <button type="button" className="btn">View Your Notes</button>
        </Link>
        <Link to="/new-note">
          <button type="button" className="btn">+ Create Your Note</button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
