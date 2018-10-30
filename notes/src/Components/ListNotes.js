import React, { Component } from 'react'
import Note from './Note';
import '../Styles/styling.css';

export default class ListNotes extends Component {
  render() {
    return(
      <div className="notes-container">
        {this.props.notes.map(note => {
            return(
              <Note
                NoteTitle={note.title}
                NoteContent={note.textBody}
                NoteTimeStamp={note.timeStamp}
                Note={note}
               />
            )
          })
        }
      </div>
    )
  }
}