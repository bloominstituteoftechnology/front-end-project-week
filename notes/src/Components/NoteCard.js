import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = props => {

    const note = props.notes.find(note => {
        if (note._id === props.match.params.id)
            return note;
    })

    if (note === undefined) {
        return <p>Nothing here</p>
    }

    return (
        <div class='container'>
            <Menu />
            <div class='note-container'>
                <h2 class='title'>
                    {note.title}
                </h2>
                <p class='body'>
                    {note.textBody}
                </p>
                <div>
                    <Link to={`/${note._id}/edit`}>Edit</Link>
                    <div class='delete' onClick={() => { props.deleteNote(props.match.params.id)}}>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default NoteCard;