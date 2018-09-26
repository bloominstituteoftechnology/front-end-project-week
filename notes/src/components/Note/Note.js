import React from 'react';
// import PropTypes from 'prop-types';
// import {Link } from 'react-router-dom';

// import NoteInfo from './NoteInfo';w

function Note(props) {
    const note = props.notesList.find(
        note => note._id === parseInt(props.match.params.noteId, 10));

    function handleDelete() {
        props.handleDeleteNote(note._id);
        props.history.push('/');
    }

    if (props.isLoading || props.notesList.length === 0) return <h2>Loading Note... Please Wait...</h2>

    return (
        
            <div>
                <div>
                    
                    <h1>{note.title}</h1>
                    <p>{note.textBody}</p>
                    
                 
                    
                </div>

                <div>
                    <p onClick={ event => {
                         props.goToEditNoteForm(event, note._id)
                         }} >Edit</p>
                    <p onClick={handleDelete}>Delete</p>          
                </div>

            </div>
    );
}

export default Note;