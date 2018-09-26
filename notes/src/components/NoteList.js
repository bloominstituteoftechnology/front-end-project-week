import React from 'react';
import Note from './Note';
import {withRouter, Link} from 'react-router-dom';

const NoteList = (props) => {
    return (
        <div className = 'note-list-container'>
            <h1>Your Notes:</h1>
        <div className = 'note-list'>
            {props.notes.map(note => {
                return <Link to = {`/notes/${note._id}`} key={`${note._id}`}>
                <Note {...note} key = {note._id} />
                </Link>
            })}

        </div>
        </div>
    )
}

export default withRouter(NoteList);