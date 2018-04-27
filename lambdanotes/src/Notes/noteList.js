import React, { Component } from "react";
import Note from "./noteCard";
import './noteList.css';

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div className="List__body">
        <h4 className="List__header">Your Notes:</h4>
            <div className="List__view">
          {this.props.notes.map(note => (
            <div className="List__notes">
              <Note key={note.id} note={note} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}