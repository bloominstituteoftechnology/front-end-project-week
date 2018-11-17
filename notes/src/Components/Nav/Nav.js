import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

/* Left side bar that remains open at all times.
 * This has the links to view & create
 */

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <h1>Lambda Notes</h1>
        <Link to="/" className="navButton">View Your Notes</Link>
        <Link to="/add" className="navButton">+ Create New Note</Link>
      </div>
    );
  }
}

export default Nav;
