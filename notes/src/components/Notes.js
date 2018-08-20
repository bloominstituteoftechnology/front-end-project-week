import React, { Component } from 'react'
import Note from './Note';

class Notes extends Component {
  render() {
    return (
      <div>
        {this.props.notes.map(note => {
            return (
                <Note key={note._id} title={note.title} content={note.textBody} />
            )
        })}
      </div>
    )
  }
}

export default Notes;