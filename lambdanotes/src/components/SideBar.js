import React, { Component } from 'react';
import './SideBar.css';

class sideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
      <h1> Lambda Notes</h1>
        <div className="view-button">
          <button>View Cards</button>
        </div>
        <div className="create-button">
          <button>+ Create Cards</button>
        </div>
      </div>
    );
  }
}

export default sideBar;