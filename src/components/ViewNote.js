import React from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote.js';

const ViewNote = (props) => {
    return (
        <div>
            <div className='edit-delete-container'>
                <div className='edit-segment'>
                    <Link to={`/${props.currentNote._id}/edit`}>
                        <p className='edit-link'>edit</p>
                    </Link>
                </div>
                <DeleteNote currentNoteID={props.currentNote._id} />
            </div>
            <h3 className='view-header'>{props.currentNote.title}</h3>
            <span className='view-content'>{props.currentNote.contents}</span>
        </div>
                
    )
}

export default ViewNote; 