import React from 'react';
import { connect } from 'react-redux';

import './NoteView.css';


const NoteView = (props) => {
    return (
        <div className="noteView-container">
        <div className=".noteView-header">Note Name</div>
        {props.notes.filter(note => {return note.id === props.match.params.id})}
        </div>
    )
}



const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteView);