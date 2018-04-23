import React, { Component } from "react";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div>
        <h1>Lambda Notes</h1>
        <div>
          <button input={this.props.showNoteList}>View Your Notes</button>
          <button>+ Create New Notes</button>
        </div>
      </div>
    );
  }
}
