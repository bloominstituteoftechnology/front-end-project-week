import React from 'react';
import { NoteContainer } from './styled-components';
import { Link } from 'react-router-dom';


const Note = props =>{
    return(
        <NoteContainer>
            <Link to={`/note/${props.note._id}`}>
            <h1>{props.note.title}</h1>
            <p> {props.note.textBody}</p>
            </Link>
        </NoteContainer>
    )
}
export default Note;