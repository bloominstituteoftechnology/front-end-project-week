import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = props => {

    console.log(props.match.params.id, 'hello')
    console.log(props.notes)

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
                </div>
            </div>
        </div>
    )
}

export default NoteCard;