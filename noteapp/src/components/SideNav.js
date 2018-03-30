import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import notestyles from './notestyles.css';

class SideNav extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Lambda Notes</h2>
        <div className="home-buttons">
          <Link to="/">
            <button className="nav-button">View Notes</button>
          </Link>
          <Link to="/NoteForm">
            <button className="nav-button">+ Create New Note</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideNav;
