import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  render() {
    return (
      <div className="background">
        <h1 className="lambda">Lambda</h1>
        <h1 className="notes">Notes</h1>
        <Link to="/" className="view">
          View Your Notes
        </Link>
        <Link to="/Create" className="create">
          + Create New Note
        </Link>
      </div>
    );
  }
}

export default SideMenu;
