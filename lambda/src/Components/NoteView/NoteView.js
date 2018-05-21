import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import './NoteView.css';

const NoteView = (props) => {
    const { id } = props.match.params;
    const getNote = (id) => {
        return props.notes.find(obj => obj.id === +id );
    };
    return (
        <div className='note'>
            <div className='note-actions'>
                <Link to={`/notes/edit/${id}`}>edit</Link>
                <DeleteNote id={id} className='note-delete' buttonLabel='Delete Note'/>
            </div>
            <h2 className='get'>{getNote(id).title}</h2>
            <p className='get'>{getNote(id).content}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps)(NoteView);