import React from "react";
import Notes from "./Notes";
import Note from './Note';
import { Link } from "react-router-dom";

class SingleNote extends React.Component {
  constructor() {
    super();
    this.state = {
      noteTitle: "",
      noteBody: ""
    };
  }

  render() {
    return (
      <div>
      <h2>{this.state.noteTitle}</h2>
      <h4>{this.state.noteBody}</h4>
      </div>
    );
  }
}

export default SingleNote;
