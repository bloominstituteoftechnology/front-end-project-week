import React from 'react';
import { NoteDiv } from './StyledComponents';
import { Markup } from 'interweave';

const Note = (props) => {
    const noteContent = props.text
    return(
        <NoteDiv onClick={ () => {
            props.getOneNote(props.id);
            props.history.push(`/notes/${props.id}`);}}>
                    <h2>{props.title}</h2>
                    <hr></hr>
                    <Markup content={noteContent} />
        </NoteDiv>
    )
}

export default Note;