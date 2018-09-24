import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Note(props) {
    console.log(props.match.params);
    const note = props.notesList.find(note => note.id === parseInt(props.match.params.noteId, 10)
    );


    function deleteNote(){
        props.deleteNote(note.id);
        props.history.push('/');
    }

    return (
        <Fragment>
            <div className="note-info-wrapper">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>
            <button className="modify-button" onClick={event => {
                event.preventDefault();
                props.openUpdateForm(event, note.id)
            }}>edit</button>
            <button className="modify-button" onClick={deleteNote}>delete</button>
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