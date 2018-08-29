import React, { Component } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./CreateNote.css";


class CreateNote extends Component {
  state = {
    notes: this.props.notes,
    noteTitle: '',
    noteContent: '',
  };

  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div>
          <input />
        </div>
      </div>
    );
  }
}

export default CreateNote;
