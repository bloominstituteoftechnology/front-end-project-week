import React from 'react';
import { Link } from 'react-router-dom';

import './Note.css';


const Note = props => {

    return (

    <Link style={{textDecoration: "none", color: "black"}} to={`/note/${props.note.id}`}>

            <div className="note ui-state-default">{/*ui-state-default..jQuery class for drag & drop*/}

                <div className="note-title">{props.note.title}</div>
                
                <p className="note-body">{props.note.body}</p>
        
            </div>

    </Link> 

    )

}

export default Note;