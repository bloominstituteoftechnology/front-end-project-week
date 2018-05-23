import React from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote.js';

const ViewNote = (props) => {
    return (
        <div>
            <div className='optionsContainer'>
                <div className='entireEditLink'>
                    <Link to={`/${props.currentID}/edit`}>
                        <p className='edit'>edit</p>
                    </Link>
                </div>
                <DeleteNote />
            </div>
            <h3 className='viewNoteHeader'>{props.notesList[props.currentID].title}</h3>
            <p className='ViewNoteContent'>{props.notesList[props.currentID].content}</p>
        </div>
                
    )
}

export default ViewNote;