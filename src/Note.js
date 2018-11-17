import React from 'react';
import { Link } from 'react-router-dom';
import { NoteDiv, NoteTitle, NoteParagraph } from './StyledComponents';

const Note = (props) => {
    return(
        <NoteDiv>
            <Link to={`/notes/${props.id}`}>
                    <h2>{props.title}</h2>
                    <hr></hr>
                    <p>{props.text}</p>
            </Link>
        </NoteDiv>
    )
}

export default Note;