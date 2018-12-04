import React from 'react';

import NoteContianer from './NoteContainer'

const NoteList = props => {
        return(
            <div>
                <h2>Your Notes:</h2>
                {props.notes.map(note => 
                    <NoteContianer key={note._id} title={note.title} body={note.textBody} id={note._id} />
                )}
            </div>
        )
    }
export default NoteList;