import React from 'react';
import { NoteContainer } from './styledcomponents';

const Note = props =>{
    return(
        <NoteContainer>

            <h1>{props.note.title}</h1>
            <p> {props.note.textBody}</p>
            {props.note.tags.map(item => <p>item</p>)}
        </NoteContainer>
    )
}
export default Note;