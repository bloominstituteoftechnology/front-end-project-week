import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="title">Lambda Notes</h1>
        <button className="button button--teal">View Your Notes</button>
        <button className="button button--teal">+ Create New Note</button>
      </div>
    );
  }
}

export default SideBar;
