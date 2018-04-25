import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
    render() {
    return (
      <div className="sidebar">
        <Link to="/notelist">
          <button className="button button--teal">View Your Notes</button>
        </Link>
      </div>
    );
  }
}
export default SideBar; 