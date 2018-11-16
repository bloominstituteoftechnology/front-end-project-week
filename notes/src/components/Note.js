import React from 'react';
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
        </div>
    )
}

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps, {deleteNote})(Note);