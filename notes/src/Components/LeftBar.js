import React, { Component } from 'react';
import './LeftBar.css';

class LeftBar extends Component {
  render() {
    return (
      <div className="left">
        <h1>Lambda Notes</h1>
        <ul className="nav">
          <li>
            <a>View Your Notes</a>
          </li>
          <li>
            <a>+ Create New Note</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftBar;
