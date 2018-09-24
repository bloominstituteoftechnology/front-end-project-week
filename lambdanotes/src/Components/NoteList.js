import React from 'react';
 

export const NoteList = props => {
    return (
        <div className="noteList" >
            <h3 className="your-header" >Your Notes:</h3>
            {props.notes.map(note => {
            return (
              <div 
                title={note.title}
                text={note.text}
                key={note.id}
                className="Single-Note"
              >
                <h4 className="note-title">{note.title}</h4>
               {note.text}
              </div>
            );
          })}
        </div>
    )
} 