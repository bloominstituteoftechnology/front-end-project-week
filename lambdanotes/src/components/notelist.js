import React, { Component } from 'react'

import Notecard from './Notecard'

export default class Notelist extends Component {
  
  render() {
    return (
      <div>
        {this.props.notes.map(note => (
          <Notecard
            note={note}  
            title={note.title}
            content={note.textBody}
            id={note.id}
            key={note.id} />
          )
        )}
      </div>
    )
  }
}
