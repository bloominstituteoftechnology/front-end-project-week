import React from "react";

const Note = props => {
    const { note } = props;
    const title = note.title;
    const text = note.textBody;
    return (
        <div className='note'>        
            I am the note
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}



export default Note;