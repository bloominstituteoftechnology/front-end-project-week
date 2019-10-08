import React from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = props => {

    const note = props.notes.find(note => {

        return note.id == props.match.params.id;
    })

    if (note === undefined) {
        return <p></p>
    }

    return (
        <div className='container'>
            <Menu />
            <div className='note-container'>
                <div className='notecard-buttons'>
                    <Link className='edit' to={`/notes/edit/${note.id}`}>edit</Link>
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