import React from "react";
import './index.css';

const Note = (props) => {
    return(
    <div name={props.index} className="note">
        <p>{props.title}</p>
        <p>{props.message}</p>
    </div>
    );
}

export default Note;