import React, { Component } from 'react';
import './LeftBar.css';

class LeftBar extends Component {
  render() {
    return (
      <div className="left">
        <p>Lambda Notes</p>
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
