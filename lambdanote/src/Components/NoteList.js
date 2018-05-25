import React from 'react';
import Note from './Note';


const NoteList = (props) => {
    return (
         <div>            
            <h3 className='note-header'>Your Notes:</h3>
            <div className='note-card'>            
                {props.notes.map(note => <Note key={note.id} note={note} />)}        
            </div>            
        </div>
    )
    
}

export default NoteList;
