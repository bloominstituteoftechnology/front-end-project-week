import React from 'react';
import {NavLink} from 'react-router-dom';

const DisplayNote = (props) => {
    return (
        <div className ='displayNoteContainer'>
            <NavLink style= {{textDecoration: 'none', color: 'black'}} to={`/note/edit/${props.note._id}`} activeClassName="selected">
                <span>Edit</span>
            </NavLink>
            <span>Delete</span>
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
        </div>
    );
}

export default DisplayNote;