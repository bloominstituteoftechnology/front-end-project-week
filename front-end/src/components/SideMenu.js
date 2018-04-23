import React, { Component } from "react";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div>
        <em>Lambda Notes</em>
        <div>
          <button input={this.props.showNoteList}>View Your Notes</button>
          <button>+ Create New Notes</button>
        </div>
      </div>
    );
  }
}
