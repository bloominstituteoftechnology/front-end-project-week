import React, { Component } from "react";
import Note from "../Note/Note.js";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [
        {
          id: 0,
          title: "This is a sample note!",
          content: "something something notetaking"
        },
        {
          id: 1,
          title: "Test for note app!",
          content: "something something notetaking"
        },
        {
          id: 2,
          title: "Hey it's working!",
          content: "something something notetaking"
        },
        {
          id: 3,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 4,
          title: "Start adding more functionality!",
          content: "something something notetaking"
        },
        {
          id: 5,
          title: "Notes on notes on notes!",
          content: "something something notetaking"
        }
      ]
    };
  }

  render() {
    const { title, content, id } = this.state.notesList;
    return (
      <div>
        <h1 className='notesList__title'>Your Notes:</h1>
        {this.state.notesList.map(note => (
          <div >
            <Note className='notesList' key={note.id} note={note} notesList={this.state.notesList} />
          </div>
        ))}
      </div>
    );
  }
}
