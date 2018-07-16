import React from 'react';


class NotesList extends React.Component {
  render() {
    return(
      <div className='notes-list'>
        <h3>Your Notes:</h3>
        <div className='notes'>
          {this.props.notes.map(note => (
            <div className='note-preview' key={note.id}>
              <h4>{note.title}</h4>
              <p>Topic: {note.topic}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default NotesList;
