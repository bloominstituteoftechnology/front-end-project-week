import React from 'react';

const NoteCard = props=>{
    function selectNote(){
        props.setCurrentNoteID(props.note._id);
        props.history.push(`/note/${props.note._id}`);
    }
    
    return(
        <div onClick={selectNote}>
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default NoteCard;