import React from 'react';
import Note from './Note';

class NoteList extends React.Component{
  render(){
    return(
      <div>
        <h1>Your Notes:{' '}</h1>
        <div>
        {this.props.notes.map(note => {
          return(
            <div>
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
        </div>
      </div>
    )}
}

Note.defaultProps = {
 notes: [],
};

export default NoteList;
