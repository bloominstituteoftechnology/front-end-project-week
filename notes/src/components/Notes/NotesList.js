import React from 'react';



import NoteCard from './NoteCard';

const NotesList = (props) => {
 
  
    return (
      <div className="notes-container">
        <h2>Your Notes:</h2>
        {props.notes.map( note => (
          <NoteCard 
              key={note._id}
              title={note.title}
              text={note.textBody} 
              id={note._id} 
            />
          ))}
    </div>
    )
    
  }
  
  

   export default NotesList;