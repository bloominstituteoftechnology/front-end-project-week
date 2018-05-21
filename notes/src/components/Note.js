import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
    console.log("match", props)
    return (


        <div className="note-view">
            <div className="navL"><Link to={`/edit/${props.note.id}`} className="nview">edit</Link>
                <Link to={`/delete/${props.note.id}`} className="nview">delete</Link>
            </div>
            <h3>{props.note.title}</h3>
            <p className="note-body">{props.note.text}</p>


        </div>
    );
}