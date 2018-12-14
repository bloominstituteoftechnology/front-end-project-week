import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './Note.css'

export default class NoteList extends Component {

  noteDelete = event => {
    event.preventDefault()
    const timeStamp = event.target.parentNode.parentNode.childNodes[1].querySelector('time').innerHTML
    const theNote = this.props.notes.filter(note => note.timeStamp === timeStamp)
    this.props.noteDelete(theNote)
  }

  render() {
    return(
      <div className="notes-container">
        <h2>Your Lambda Notes!: </h2>
        <hr />
        {
          this.props.notes.map(note => {
            return(
              <Note
                NoteTitle={note.title}
                NoteContent={note.textBody}
                NoteTimeStamp={note.timeStamp}
                NoteDelete={this.noteDelete}
                Note={note}
                id={note.id}
               />
            )
          })
        }
      </div>
    )
  }
}
