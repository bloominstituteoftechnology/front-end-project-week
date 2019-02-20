import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebarContainer">
        <div className="sidebarTitle">
          Lambda
          <br />
          Notes
        </div>
        <Link to={`/`}>
          <div className="sidebarButton">View Your Notes</div>
        </Link>
        <Link to={`/input`}>
          <div className="sidebarButton">+ Create New Note</div>
        </Link>
        <div onClick={this.props.export} className="sidebarButton">
          Export
        </div>
      </div>
    );
  }
}

export default Sidebar;
