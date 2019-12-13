<<<<<<< HEAD:notes/src/Components/NoteCard.js
import React, { Component } from 'react';
=======
import React from 'react';
import Menu from '../Menu/Menu';
>>>>>>> cb5ed60e989ee41ecab4bda4c6ed01c1058c14f5:notes/src/Components/NoteCard/NoteCard.js
import { Link } from 'react-router-dom';

class NoteCard extends Component {

<<<<<<< HEAD:notes/src/Components/NoteCard.js
    render() {
        return (
            <div>
                Note card
=======
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
>>>>>>> cb5ed60e989ee41ecab4bda4c6ed01c1058c14f5:notes/src/Components/NoteCard/NoteCard.js
            </div>
        )
    }
}

export default NoteCard;