// React and Router
import React from 'react';
import { Link } from "react-router-dom";

// Redux
import { connect } from 'react-redux';

// Components
import DeleteNote from "../DeleteNote";

// Styling
import './NoteView.css';

const NoteView = (props) => {
    const { id } = props.match.params;
    const getNote = (id) => {
        return props.notes.find(obj => obj.id === +id );
    };
    return (
        <div className='note-view p-4'>
            <div className='note-actions'>
                <Link to={`/notes/edit/${id}`}>edit</Link>
                <DeleteNote id={id} className='note-delete' buttonLabel='Delete Note'/>
            </div>
            <h2 className='my-4'>{getNote(id).title}</h2>
            <p className='pt-2'>{getNote(id).content}</p>
        </div>
    )
} // end of NoteView

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps)(NoteView);