import React, { Component } from 'react'
import Note from './Note';
import '../Styles/styling.css';

export default class NoteList extends Component {
  render() {
    return(
      <div className="notes-container">
        {this.props.notes.map(note => {
            return(
              <Note
                NoteTitle={note.title}
                NoteContent={note.textBody}
                Note={note}
               />
            )
          })
        }
      </div>
    )
  }
}