import React, { Component } from 'react';
import OneNote from './OneNote';

class Notes extends Component {
  render() {
    let oneNote;
      if(this.props.notes){
        oneNote = this.props.notes.map(note => {
          //console.log(note);
          return (
            <OneNote key={note.id} note={note} />
          )
        });
      }
    return (
      <div className='Notes'>
        {oneNote}
      </div>
    );
  }
}

export default Notes;
