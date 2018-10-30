import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

let Note = props => {
    // simple return of the note title and text, wrapped in a link to the full page note.
    // added some simple logic to make the overflow neater.
    return (
        <Link  to={`/notes/${props.note._id}`}>
            <div className='note'>
                <h2>{props.note.title.length > 17 ? props.note.title.substring(0,16) + "..." : props.note.title}</h2>
                <ReactMarkdown source={props.note.textBody.length > 40 ? props.note.textBody.substring(0,200) + "..." : props.note.textBody} />
            </div>
        </Link>
    )
}

export default Note;