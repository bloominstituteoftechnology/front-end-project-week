// React imports
import React, { Component } from 'react';
// CSS imports
import './SideNavigationView.css';
// Redux imports
// import { connect } from 'react-redux';
// React Router import
// import { route, withRouter } from 'react-router-dom';
class SideNavigationView extends Component {
  render() {
    return (
      <header className="mainNav">
        <h1>
          Lambda
          <br />
          Notes
        </h1>
        <button>View Your Notes</button>
        <button>+ Create New Note</button>
      </header>
    );
  }
}

export default SideNavigationView;
