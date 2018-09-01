import React, { Component } from "react";
import "./index.css";

class LeftNav extends Component {
  render() {
    return (
      <div className="nav_container">
        <div>
          <h1 className="nav_header">Lambda Notes</h1>
        </div>
        <div className="nav_buttons_container">
          <a href="#" className='button_link'>
            <div className="nav_button">View Your Notes</div>
          </a>
          <a href="#" className='button_link'>
            <div className="nav_button">+ Create New Notes</div>
          </a>
        </div>
      </div>
    );
  }
}

export default LeftNav;
