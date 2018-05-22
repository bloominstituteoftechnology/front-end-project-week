import React from 'react';
import { connect } from 'react-redux';

import './NoteView.css';


const NoteView = props => {

    let matchedNote = props.notes.filter(note => {return note.id == props.match.params.id})[0] // [0] is the one element in the filtered Array that has a matched id
    // console.log(matchedNote)
    return (
        <div className="noteView-container">
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