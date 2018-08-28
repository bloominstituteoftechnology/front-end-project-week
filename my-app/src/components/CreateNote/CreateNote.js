import React, { Component } from "react";
import SideMenu from "../SideMenu/SideMenu";

class CreateNote extends Component {
    state = {
        notes: this.props.notes,
    };

  render() {
    return (
      <div>
        <SideMenu />
        <div>
            <h3>Create New Note</h3>
        </div>
      </div>
    );
  }
}

export default CreateNote;
