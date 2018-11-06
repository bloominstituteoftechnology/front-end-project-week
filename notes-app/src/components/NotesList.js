import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';
//import axios from 'axios'

class NotesList extends Component {
  
  render() {
    return (
      <div className="NotesList">
        <h1>Lambda Notes</h1>
        <div>
          {this.props.notes.map(note => {
            return (
              
                <Note note={note}/>
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