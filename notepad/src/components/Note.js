import React from 'react';
import { deleteNote } from '../actions';
import { connect } from 'react-redux';


const Note = (props) => {
    const { note } = props;

    const editNote = () => {

    }
    const deleteNote = () => {
        console.log('ID', note.id)
        props.deleteNote(note.id);

    }

    return (

        <div className={'note'}>
            <p>Title: {note.title}</p>
            <p>{note.content}</p>
            <button onClick={editNote}>Edit</button>
            <button onClick={deleteNote}>Delete</button>
        </div>
    )

}


export default connect(null, { deleteNote })(Note);
