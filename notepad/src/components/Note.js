import React from 'react';
import { deleteSmurf } from '../actions';
// import { connect } from 'react-redux';


const Note = (props) => {
    const { note } = props;

    const editNote = () => {

    }
    const deleteNote = () => {
        console.log('ID', note.id)
        props.deleteNote(note.id);

    }

    return (

        <div className={'smurf'}>
            <p>Title: {note.title}</p>
            <p>{note.content}</p>
            <button onClick={editNote}>Edit</button>
            <button onClick={deleteNote}>Delete</button>
        </div>
    )

}


export default Note;