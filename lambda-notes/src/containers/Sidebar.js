import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-12 text-center text-md-left sidebar">
        <h1>Lambda Notes</h1>
        <Link className="d-block" to="/">
          <button type="button" className="btn">View Your Notes</button>
        </Link>
        <Link className="d-block" to="/new-note">
          <button type="button" className="btn">+ Create Your Note</button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
