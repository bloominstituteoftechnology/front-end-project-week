import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";
import CreateNoteItem from "./sub-component/CreateNoteItem";
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
        <Route component={CreateNoteItem} />
        {/* <Route component={EditNote} /> */}
      </div>
    );
  }
}
