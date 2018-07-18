import React from 'react';
import Notes from './Notes.js';

class NotesList extends React.Component {
  render() {
    return(
      <div className='notes-list'>
        <h3>Your Notes:</h3>
        <div className='notes'>
          {this.props.notes.map(note => (
              <Notes key={note.id} note={note} />
          ))}
        </div>
      </div>
    )
  }
}

export default NotesList;
