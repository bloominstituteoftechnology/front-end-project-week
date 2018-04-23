import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";

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
    console.log(this.state.savedNotes);
    return (
      <div>
        <Route component={NoteList} />
        {/* <Route component={CreateNote} />
        <Route component={EditNote} /> */}
      </div>
    );
  }
}
