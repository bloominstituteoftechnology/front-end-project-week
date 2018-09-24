import React from 'react';

import Note from './Note';

class NotesList extends React.Component {
  render() {
    return (
      <div className='Notes-List'>
      {/* Side Bar goes here */}
      <div className='70-percent'>
        <h3>Your Notes: </h3>
        <ul>
          {this.props.notes.map(note => {
            return (
              <Note
                title={note.title}
                noteBody={note.noteBody}
              />
            )
          })}
        </ul>
      </div>
    </div>
    )
  }
}

export default NotesList;