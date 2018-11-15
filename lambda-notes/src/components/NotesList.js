import React from 'react';

import NoteCard from './NoteCard';

const NotesList = props=>{
    return(
        <div>
            <h2>Your Notes:</h2>
            {props.notes.map(note=><NoteCard key={note._id} note={note} setCurrentNote={props.setCurrentNote}/>)}
        </div>
    )
}

export default NotesList;