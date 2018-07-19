import React, { Component } from 'react';
import Notes from "./Notes"
import { Link } from 'react-router-dom';
import "./Notes.css";

class NoteContainer extends Component {
  render(){
    return(
      <main>
        <h2>
          Your Notes:
        </h2>
        <div className="notes-container">
          {this.props.notes.map((note,index) => {
            return(
              <Link to={`/notes/${index}`} style={{ textDecoration: 'none' }} key={index}>
                <Notes key={note.id} title={note.title} body={note.body}/>
              </Link>
            )
          })}
        </div>
      </main>
    )
  }
}

export default NoteContainer;
