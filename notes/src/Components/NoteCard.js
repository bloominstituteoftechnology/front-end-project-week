import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = props => {

    const note = props.notes.find(note => {
        if (note.id === props.match.params.id)
            return note;
    })

    if (note === undefined) {
        return <p>Nothing here</p>
    }

    return (
        <div className='container'>
            <Menu />
            <div className='note-container'>
                <div className='notecard-buttons'>
                    <Link className='edit' to={`/${note.id}/edit`}>edit</Link>
                    <Link className='delete' to='/' onClick={() => { props.deleteNote(props.match.params.id) }}>delete</Link>
                </div>
                <div className='notecard'>
                    <h2 class='title'>
                        {note.title}
                    </h2>
                    <p className='body'>
                        {note.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoteCard;