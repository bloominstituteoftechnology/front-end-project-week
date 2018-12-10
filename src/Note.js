import React from 'react';
import { NoteDiv } from './StyledComponents';
import { Markup } from 'interweave';

const Note = (props) => {
    let noteContent = props.text;
    if(props.text.length > 120){ noteContent = noteContent.substring(0,120) + '...' }
    return(
        <NoteDiv onClick={ () => {
            props.getOneNote(props.id);
            props.history.push(`/notes/${props.id}`);}}>
                    <h2 className="note-title">{props.title}</h2>
                    <hr></hr>
                    <div className="notes-markup" id="markup-header">
                        <Markup content={noteContent} />
                    </div>
        </NoteDiv>
    )
}

export default Note;