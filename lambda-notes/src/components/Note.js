import React from "react";

const Note = (props) => {
    return (
        <div>
           <h3>{props.note.title}</h3>
           <p>{props.note.text}</p> 
        </div>
    )
}

export default Note;