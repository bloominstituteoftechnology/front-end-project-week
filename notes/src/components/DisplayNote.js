import React from 'react';
import {NavLink} from 'react-router-dom';

const DisplayNote = (props) => {
    return (
        <div className ='displayNoteContainer'>
            <div className='content-manipulation'>
                <NavLink style= {{textDecoration: 'none', color: 'black'}} to={`/note/edit/${props.note._id}`} activeClassName="selected">
                    <span>edit</span>
                </NavLink>
            <span onClick={props.overlayToggle}>delete</span>
            </div>
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
        </div>
    );
}

export default DisplayNote;