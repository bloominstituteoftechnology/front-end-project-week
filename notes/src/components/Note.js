import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/noteActions'



const Note = props => {
    const { note, deleteNote } = props

    const clickHandler = () => {
        deleteNote(note._id)
    }
    return(
        <div key={note._id} className="note-card">
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
            <button onClick={clickHandler}>Delete</button>
            <Link to={`/update/${note._id}`}>Update</Link>
        </div>
    )
}

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps, {deleteNote})(Note);