// React and Router
import React from 'react';
import { Link } from "react-router-dom";

// Components
import DeleteNote from "../DeleteNote";

// Styling
import './NoteView.css';

const NoteView = (props) => {
    return (
        <div className='note-view p-4'>
            <div className='note-actions'>
                <Link to={`/notes/${props.match.params.id}/edit`}>edit</Link>
                <DeleteNote className='note-delete' buttonLabel='Delete Note'/>
            </div>
            <h2 className='my-4'>{props.location.title}</h2>
            <p className='pt-2'>{props.location.content}</p>
        </div>
    )
} // end of NoteView

export default NoteView;