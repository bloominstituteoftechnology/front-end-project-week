import React from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote.js';

const ViewNote = (props) => {
    return (
        <div>
            <div className='optionsContainer'>
                <div className='entireEditLink'>
                    <Link to={`/${props.currentNote._id}/edit`}>
                        <p className='edit'>edit</p>
                    </Link>
                </div>
                <DeleteNote currentNoteID={props.currentNote._id} />
            </div>
            <div className='entireNote'>
                <h3 className='viewNoteHeader'>{props.currentNote.title}</h3>
                <span className='viewNoteContent'>{props.currentNote.textBody}</span>
            </div>
        </div>
                
    )
}

export default ViewNote;