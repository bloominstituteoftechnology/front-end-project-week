import React from 'react';

import NoteContianer from './NoteContainer'

const NoteList = props => {
    console.log(props._id)
        return(
            <div>
                {props.notes.map(notes => 
                    <NoteContianer key={notes._id} title={notes.title} body={notes.TextBody} id={notes._id} />
                )}
            </div>
        )
    }
export default NoteList;