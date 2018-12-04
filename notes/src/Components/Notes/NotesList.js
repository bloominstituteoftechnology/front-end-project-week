import React from 'react';
import {Link} from 'react-router-dom';

import Note from './Notes';

const NotesList = props => {
    return(
        <div>
            <h2>
                Your Notes: 
            </h2>
            <div>
                {props.notes.map(note =>{
                    return (
                        <Link to = {'note/${note.id}'} key = {note.id}>
                            <Note key = {note.id} note={note} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesList;