import React from 'react'

import NoteView from './NoteView'


const NotesList = (props) => {
    return (
        <div>
         <p> This is the Notes List: </p>
                {props.notes.map(note => {
                    return(
                        <div key={note._id}>
                            <NoteView 
                                note={note}
                                handleDeleteNote={props.handleDeleteNote}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default NotesList