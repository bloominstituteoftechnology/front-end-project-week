import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../App.css';

/* Main entry point for the Lambda Notes app.
 * This will primarily contains the routes needed for our app, along with
 * app links
 */

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <h1>Lambda Notes</h1>
        <Link to="" className="navButton">View Your Notes</Link>
        <Link to="" className="navButton">+ Create New Note</Link>
      </div>
    );
  }
}

export default Nav;
