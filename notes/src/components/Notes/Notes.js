import React from 'react';
import Note from '../Note/Note';
import {connect} from 'react-redux';
import {fetchNote} from '../../actions'
import './Notes.css'

const Notes = props => {

    const routeToItem = (event, id) => {
        event.preventDefault();
        props.history.push(`/notes/${id}`);
        props.fetchNote(id);
    }

    return (
        <div className="notes">
            {props.notes.map((note, index) => {
                return (
                    <div onClick={event => routeToItem(event, note._id)} >
                    <Note key={index} title={note.title} content={note.textBody} />
                    </div>
                )
            })}
        </div>
    )
}

export default connect(null,{
    fetchNote
})(Notes);