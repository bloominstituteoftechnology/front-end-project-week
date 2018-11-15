import React from 'react'

import NoteView from './NoteView'

import { Route, Link } from 'react-router-dom'


const NotesList = (props) => {
    return (
        <div>
            <p> This is the Notes List: </p>
                {props.notes.map(note => {
                    return(
                        <div key={note._id}>
                            <h2>
                                <Link to={`/notes/${note._id}`}>{note.title}</Link>
                            </h2>
                            
                            {/* <Route 
                                path="/notes/:id"
                                //component={NoteView}
                                render={props => <NoteView {...props} note={note} handleDeleteNote={props.handleDeleteNote} />}
                            /> */}
                        </div>
                    )
                })}
        </div>
    )
}

export default NotesList

/* <NoteView note={note} handleDeleteNote={props.handleDeleteNote} /> */