import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import notestyles from './notestyles.css';

class SideNav extends Component {
  render() {
    return (
      // <div className="sidebar">
      //   <h2>Lambda Notes</h2>
      //   <button className="note-button">View Notes</button>
      //   <button className="note-button">Add note</button>
      // </div>
      <div className="">
        <h2>Lambda Notes</h2>
        <div>
          <Link to="/">View Notes</Link>
        </div>
        <div>
          <Link to="/NoteForm">+ Create New Note</Link>
        </div>
      </div>
    );
  }
}

export default SideNav;
