import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Note = props => {
    return (
        <section className = 'note'>
            <div className = 'note-title'>
                <Link to = {`/note/${props.id}`}><h4>{props.title}</h4></Link>
            </div>

            <div className = 'note-body'>
                <p>{props.textBody}</p>
            </div>
        </section>
    )
}

export default Note;