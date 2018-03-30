import React, { Component } from 'react';
import './LeftBar.css';
import { Link } from 'react-router-dom';

class LeftBar extends Component {
  render() {
    return (
      <div className="left">
        <div className="LN">Lambda Notes</div>
        <ul className="nav">
          <Link to="/">
            <button className="Button">View Your Notes</button>
          </Link>

          <Link to="/Create">
            <button className="Button">+ Create New Note</button>
          </Link>
        </ul>
      </div>
    );
  }
}

export default LeftBar;
