import React from "react";
import { NavLink } from "react-router-dom";

const Note = props => {
    const { note } = props;
    const title = note.title.length >= 12
    ? `${note.title.substring(0, 12)}...`
    : note.title;
    const text = note.textBody.length >= 200 
    ? `${note.textBody.substring(0, 200)}...`
    : note.textBody;
    return (
        <div className='note'>
        <NavLink to={`/view/${note._id}`}>
                <h3>{title}</h3>
        </NavLink>           
            <p>{text}</p>
        </div>
    );
};



export default Note;