import React, { Component } from "react";
import TempNote from './TempNoteStore'

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div> 
        <TempNote />
    </div>;
  }
}

export default NoteList;
