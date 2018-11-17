import React, { Component } from "react";
import { Note } from "./Note.js";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        /* Using the cards prop, map over the list creating a new Card component
        for each passing the card as the only prop*/}
        {this.props.notes.map((note, index) => {
          return (
            <Note id={note.id} key={index} note={note}>
              {" "}
            </Note>
          );
        })}
      </div>
    );
  }
}
