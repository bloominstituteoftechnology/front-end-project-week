import React from 'react';
import Note from './Note';

const NoteList = (props) => {
    return (
        <div>

            {props.notes.map(note => {
                return <Note {...note} key = {note.id} />
            })}

        </div>
    )
}

export default NoteList;