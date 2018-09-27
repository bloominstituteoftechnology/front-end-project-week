import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal/Modal';
import '../App.css';


function Note(props) {
    const note = props.notesList.find(note => note.id === parseInt(props.match.params.noteId, 10)
    );

    function deleteNote(){
        props.deleteNote(note.id);
        props.history.push('/notes');
    }

    return (
        <Fragment>
            <div className = 'single-note'>
              <div className = 'edit-delete'>
                <a className = 'plain-button' onClick = {event => {
                    event.preventDefault();
                    props.openUpdateForm(event, note.id)
                }}>Edit note</a>
                <a className = 'plain-button' onClick = {event => {
                    props.showModal(event, note.id)
                }}>Delete note</a>

              </div>
                  <div className = 'note-info-wrapper'>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                  </div>
            </div>

            <Modal show = {props.show} className = 'deleteModal'>
              Are you sure you want to delete this note?
              <button className = 'blueButton' onClick = {props.showModal}>No</button>
              <button className = 'modal-button' onClick = {deleteNote}>Yes!</button>
            </Modal>

        </Fragment>
    )
}

export default Note;
