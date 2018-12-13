import React, { Component } from 'react';
import Note from './Note';
import Navigation from './Navigation';

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }
  
  render() {
    return (
      <div className="NotesList">
      <Navigation />
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