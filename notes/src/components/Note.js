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
        
        <div key={note.id} className="note-card">
        <Link to={`/Noteview/${note.id}`}>
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
            </Link>
            {/* <button onClick={clickHandler}>Delete</button>
            <Link to={`/update/${note._id}`}>edit</Link> */}
        </div>
        
    )
}

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps, {deleteNote})(Note);