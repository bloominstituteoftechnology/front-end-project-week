import React, { Component } from "react";
import NoteForm from "./NoteForm";

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    const { notes, match } = props;
    const { id } = match.params;
    this.note = notes.filter(note => note._id === id)[0];
  }
  render() {
    const { note } = this;
    return (
          <NoteForm note={ note }
          titleText="Edit Note:"
          buttonText="Update" />
    );
  }
}
