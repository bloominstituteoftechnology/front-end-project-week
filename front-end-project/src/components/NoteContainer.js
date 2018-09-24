import React, { Component } from "react";
import Notes from "./Notes/Notes";
import NavBar from "./NavBar/Navbar";

class NoteContainer extends Component {
  state = {
    notes: []
  };

  render() {
    const { notes } = this.state;
    console.log(notes);
    return (
      <div>
        <NavBar />
        <Notes notes={notes} />
      </div>
    );
  }
}

export default NoteContainer