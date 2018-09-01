import React, { Component } from "react";
import "./index.css";

class LeftNav extends Component {
  render() {
    return (
      <div className="nav_container">
        <div>
          <h1 className="nav_header">Lambda Notes</h1>
        </div>
        <div className='nav_buttons_container'>
            <div className='nav_button'>View Your Notes</div>
            <div className='nav_button'>+ Create New Notes</div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
