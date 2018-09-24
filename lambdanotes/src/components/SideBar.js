import React, { Component } from 'react';
import './sideBar.css';

class sideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
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