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
            <div className='each-note'>
            <Note
              key={note.id}
              title={note.title}
              textBody={note.textBody}
            />
            <button
                onClick={() => {
                  console.log(note._id);
                  this.props.deleteNote(
                    note._id
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
