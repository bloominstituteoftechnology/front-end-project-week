import React, { Component } from 'react';
import NoteCard from './NoteCard';
//import axios from 'axios'

class NotesList extends Component {
  render() {
    return (
      <div className="NotesList">
        <h1>Lambda Notes</h1>
        <div>
          {this.props.notes.map(note => {
            return (
              <NoteCard 
                title={note.title}
                textBody={note.textBody}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

NotesList.defaultProps = {
  notes: []
}

export default NotesList;