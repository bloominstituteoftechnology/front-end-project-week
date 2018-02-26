import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div>
        <h1>Lambda Notes</h1>
        <button className="button--teal">View Your Notes</button>
        <button className="button--teal">+ Create New Note</button>
      </div>
    );
  }
}

export default SideBar;
