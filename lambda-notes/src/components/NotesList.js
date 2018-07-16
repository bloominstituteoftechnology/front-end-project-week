import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Note from "./Note";
import { notes } from "../data";

class NotesList extends Component {
  render(props) {
    return (
      <div className="notes-list-div">
        <h3>Your Notes: </h3>
        <ul className="notes-list">
          {this.props.notes.map(note => {
            return (
                <Link className='note-link'key={note.id} to={`/notes/${note.id}`}>
              <Note title={note.title}  content={note.content} id={note.id}/>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NotesList;

