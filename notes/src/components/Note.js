import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/noteActions'
import '../App.css';



const Note = props => {
    const { note, deleteNote } = props

    // const clickHandler = () => {
    //     deleteNote(note._id)
    // }
    return(
        <Link to={`/Noteview/${note._id}`}>
        <div key={note._id} className="note-card">
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
            {/* <button onClick={clickHandler}>Delete</button> */}
        </div>
        </Link>
    )
}

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps, {deleteNote})(Note);