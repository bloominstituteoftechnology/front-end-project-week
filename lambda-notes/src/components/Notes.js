import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {
  render() {
    let note;
      if(this.props.notes){
        note = this.props.notes.map(note => {
          return (
            <Note key={note.id} note={note} />
          )
        });
      }
    return (
      <div className="List-View">
        {note}
      </div>
    );
  };
}

export default Notes;