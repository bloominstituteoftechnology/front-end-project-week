import React from 'react';
import Note from './note';




const NotesList = props=>{
    console.log(props);
    return(
        <div> 
            {props.notes.map(note=>{
                return <Note key={note._id} note={note} />
            })}
        
        </div>
    )
}

export default NotesList;