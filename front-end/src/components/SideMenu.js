import React, { Component } from "react";

import "./SideMenu.css";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div className="SideBar">
        <h1>Lambda Notes</h1>
        <div>
          <button input={this.props.showNoteList}>View Your Notes</button>
          <button>+ Create New Notes</button>
        </div>
      </div>
    );
  }
}
