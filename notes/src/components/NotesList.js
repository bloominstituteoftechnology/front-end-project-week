import React from 'react';

import Note from './Note';

const NotesList = props => {
    return (
        <div>
            {props.notes.map(note => {
                return <Note key={note._id} note={note} />
            })}
        </div>
    )
}

export default NotesList;