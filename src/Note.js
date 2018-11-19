import React from 'react';
import { Link } from 'react-router-dom';
import { NoteDiv } from './StyledComponents';
import { Markup } from 'interweave';

const Note = (props) => {
    const noteContent = props.text
    return(
        <NoteDiv>
            <Link to={`/notes/${props.id}`}>
                    <h2>{props.title}</h2>
                    <hr></hr>
                    <Markup content={noteContent} />
            </Link>
        </NoteDiv>
    )
}

export default Note;