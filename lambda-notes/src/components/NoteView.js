import React from 'react'; 


export const NoteView = (props) => {

    let note = props.notes.find(note => `${note.id}` === props.match.params.id);
    
    return(
        <div>
          <h3>{note.title}</h3> 
          <p>{note.textBody}</p> 
        </div>  
    )
}