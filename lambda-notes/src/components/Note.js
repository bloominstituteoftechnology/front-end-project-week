import React from "react";

const Note = (props) =>{
    return(
        <div className="noteCard">
            <h2 className="noteHeading">{props.note.title}</h2>
            <p>{props.note.textBody}</p>
            <p onClick={props.deleteHandler(props.id)}>Delete</p>
        </div>
    )
}

export default Note