import React from 'react';
import { Link } from 'react-router-dom';

import './Note.css';


const Note = props => {

    return (

       <Link className="ui-state-default" style={{textDecoration: "none", color: "black"}} to={`/note/${props.note.id}`}>

            <div className="note">

                <div className="note-title">{props.note.title}</div>
                
                <p className="note-body">{props.note.body}</p>

            </div>

       </Link>

    )

}

export default Note;