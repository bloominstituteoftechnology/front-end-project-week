import React from 'react';
import {NavLink} from 'react-router-dom';

const NoteList = props => {
    console.log('notelist props:', props)
    return (
        <div>
            <h1>Your Notes:</h1>
            {props.notes.map(note => 
                <div key={note.id}>
                    <NavLink to={`/notes/${note.id}`}>
                        <h2>{note.title}</h2>
                        <p>{note.content}...</p>
                    </NavLink>  
                </div> 
            )}
        </div>
    )
}


export default NoteList;