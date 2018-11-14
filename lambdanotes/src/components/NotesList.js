import React from 'react'

import NoteView from './NoteView'


const NotesList = (props) => {
    return (
        <div>
         <p> This is the Notes List: </p>
            <p>
                {props.notes.map(note => {
                    return note.textBody
                })}
            </p>
        </div>
    )
}

export default NotesList