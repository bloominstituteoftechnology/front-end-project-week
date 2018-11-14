import React from 'react';

import NoteCard from './NoteCard';

const NotesList = props=>{
    return(
        <div>
            {props.notes.map(note=><NoteCard key={note._id} title={note.title} text={note.textBody}/>)}
        </div>
    )
}

export default NotesList;