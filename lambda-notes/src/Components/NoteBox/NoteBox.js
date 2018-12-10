import React from "react";


const NoteBox = props => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.textBody}</p>
        </div>
    );
}

export default NoteBox;