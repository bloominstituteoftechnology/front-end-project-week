import React, { Component } from "react";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Lambda Notes</h2>
        <button>View Your Notes</button>
        <button>+ Create New Note</button>
      </div>
    );
  }
}

export default SideBar;
