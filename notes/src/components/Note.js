import React from 'react';
import '../App.css';

const Note = props => {
    return (
        <section className = 'note'>
            <div className = 'note-title'>
                <h3>{props.title}</h3>
            </div>

            <div className = 'note-body'>
                <p>{props.textBody}</p>
            </div>
        </section>
    )
}

export default Note;