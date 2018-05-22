import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './NoteView.css';


const NoteView = props => {

    let matchedNote = props.notes.filter(note => {return note.id == props.match.params.id})[0] // [0] is the one element in the filtered Array that has a matched id
    
  
    return (
        <div className="noteView-container">
            <div className="links-container">
                <Link className="link" to={`/note/${matchedNote.id}/delete`}>delete</Link>
                <Link className="link" to={`/note/${matchedNote.id}/edit`}>edit</Link>
            </div>
            <div className="noteView-title">{matchedNote.title}</div>
            <div className="noteView-body">{matchedNote.body}</div>
        </div>
    )
} 
  

    
       
    
  



const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteView);