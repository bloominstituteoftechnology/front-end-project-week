import React from 'react';
import {NotesHeader, NotesWrapper, NotesContent, Notes } from '../style'


const NotesList = (props) => {
    console.log(props)
    return(
        <div className='notes-view'>
            <NotesHeader>Your Notes:</NotesHeader>
        <NotesWrapper>
            
            {props.notes.map(note => {
                return (
                <NotesContent>
                    
                <Notes key={note._id} onClick={ () => props.history.push(`/note/${note._id}`)}>
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                </Notes>
                </NotesContent>
            );
            })}
        </NotesWrapper>
        </div>
    );
};

export default NotesList