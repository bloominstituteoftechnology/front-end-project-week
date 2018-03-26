import React, { Component } from "react";
import "./SideMenu.css";

class SideMenu extends Component {
  render() {
    return (
      <div className="background">
        <h1 className="lambda">Lambda</h1>
        <h1 className="notes">Notes</h1>
        <button className="view">View Your Notes</button>
        <button className="create">+ Create New Note</button>
      </div>
    );
  }
}

export default SideMenu;
