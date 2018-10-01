import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './Note.css'

export default class NoteList extends Component {
  render() {
    return(
      <div className="notes-container">
        <h2>Your Lambda Notes!: </h2>
        {
          this.props.notes.map(note => {
            return(
              <Note
                NoteTitle={note.title}
                NoteContent={note.text}
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
