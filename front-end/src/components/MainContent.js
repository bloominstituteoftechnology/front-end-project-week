import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";
import CreateNote from "./sub-component/CreateNote";
// import EditNote from "./sub-component/EditNote" // Not done yet

import { Route } from "react-router-dom";

export default class MainPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      showNoteList: true,
      showCreateNote: false,
      showEditNote: false
    };
  }

  render() {
    return (
      <div>
        <Route component={NoteList} />
        <Route component={CreateNote} />
        {/* <Route component={EditNote} /> */}
      </div>
    );
  }
}
