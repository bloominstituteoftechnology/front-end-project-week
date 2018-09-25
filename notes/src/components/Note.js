import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal/Modal';
import '../App.css';


function Note(props) {
    console.log(props.match.params);
    console.log("in note");
    const note = props.notesList.find(note => note.id === parseInt(props.match.params.noteId, 10)
    );


    function deleteNote(){
        props.deleteNote(note.id);
        props.history.push('/notes');
    }

    return (
        <Fragment>
            <div className="single-note">
            <div className="edit-delete">
            <a className="plain-button" onClick={event => {
                event.preventDefault();
                console.log("clicked open update");
                props.openUpdateForm(event, note.id)
            }}>edit</a>
            <a className="plain-button" onClick={event => {
                props.showModal(event, note.id)
            }}>delete</a>
            
            </div>
                <div className="note-info-wrapper">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            
                </div>
            </div>

            <Modal show={props.show} className="deleteModal">
            Are you sure you want to delete this note?
            <button className="blueButton" onClick={props.showModal}>nope</button>
            <button className="prompt-button" onClick={deleteNote}>delete</button> 
            </Modal>
           
        </Fragment>
    )
}

Note.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            avengerId: PropTypes.string
        })
    }),
    notesList: PropTypes.array,
    deleteNote: PropTypes.func,
    openUpdateForm: PropTypes.func
};

export default Note;