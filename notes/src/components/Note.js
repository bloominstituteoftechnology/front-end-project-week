import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';

 function Note(props) {
    console.log(props);
    const note = props.notesList.find(note => note.id === parseInt(props.match.params.noteId, 10)
    );

     function deleteNote(){
        props.deleteNote(note.id);
        props.history.push('/notes');
    }

     return (
        <Fragment>
          <div className = 'note-info-wrapper'>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>

          <button className = 'plain-button' onClick = {event => {
              event.preventDefault();
              props.openUpdateForm(event, note.id)
          }}>Edit Note</button>

          <button className = "plain-button" onClick = {event => {
              props.showModal(event, note.id)
          }}>Delete Note</button>

          <Modal show={props.show} className="deleteModal">
          Are you sure you want to delete this note?
          <button className = 'prompt-button' onClick = {props.showModal}>Yes, proceed</button>
          <button className = 'prompt-button' onClick = {deleteNote}>No</button>
          </Modal>

        </Fragment>
      )
};

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
