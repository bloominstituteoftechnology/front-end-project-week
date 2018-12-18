import React from "react";
import { NavLink } from "react-router-dom";

const Note = props => {
    const { note } = props;
    const title = note.title;
    const text = note.textBody;
    return (
        <div className='note'>
        <NavLink to={`/view/${note._id}`}>
                <h3>{title}</h3>
        </NavLink>           
            <p>{text}</p>
        </div>
    );
}



export default Note;