// React imports
import React, { Component } from 'react';
// CSS imports
import './SideNavigationView.css';
// Redux imports
// import { connect } from 'react-redux';
// React Router import
// import { route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
class SideNavigationView extends Component {
  render() {
    return (
      <header className="mainNav">
        <h1>
          <Link to="/" className="navLink">
            Lambda
            <br />
            Notes
          </Link>
        </h1>
        <Link to="/" className="navLink">
          <button>View Your Notes</button>
        </Link>
        <Link to="/add-notes-form" className="navLink">
          <button>+ Create New Note</button>
        </Link>
        <input type="text" placeholder="Search Notes" className="searchBar" />
      </header>
    );
  }
}

export default SideNavigationView;
