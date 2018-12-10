import React from 'react';
import {NotesWrapper, NotesContent, Notes } from '../style'
const NotesList = (props) => {
    return(
        <NotesWrapper>
            {props.notes.map(note => 
            
                <NotesContent>
                <Notes key={note._id} onClick={ () => props.history.push(`/note/${note._id}`)}>
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                </Notes>
                </NotesContent>
                )}
        </NotesWrapper>
    );
};

export default NotesList