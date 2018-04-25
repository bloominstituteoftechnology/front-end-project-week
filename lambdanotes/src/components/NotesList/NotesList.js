import React, { Component } from "react";
import Note from "../Note/Note.js";

export default class NotesList extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    const { title, content, id } = this.state.props.notesList;
    return (
      <div>
        <h1 className='notesList__title'>Your Notes:</h1>
        {this.state.notesList.map(note => (
          <div >
            <Note className='notesList' key={note.id} note={note} notesList={this.state.props.notesList} />
          </div>
        ))}
      </div>
    );
  }
}
