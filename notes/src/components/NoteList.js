import React from 'react';
import Note from './Note';

class NoteList extends React.Component{
  render(){
    return(
      <div className='main-page'>
        <h3>Your Notes:{' '}</h3>
        <ul>
        {this.props.notes.map(note => {
          return(
            <div className='notes'>
            <Note
              key={note.id}
              title={note.title}
              textBody={note.textBody}
            />
            <button
                onClick={() => {
                  this.props.deleteNote(
                    note.id
                  )
                }}>Delete</button>
            </div>
          )
        })}
        </ul>
      </div>
    )}
}

Note.defaultProps = {
 notes: [],
};

export default NoteList;
