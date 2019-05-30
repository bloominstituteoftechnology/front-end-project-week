import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';

const ListView = (props) => {
    return (
        <div className='list-container'>
            <h3 className='list-header'>Your Notes:</h3>
            <div className='note-collection'>
                {props.notesList.map(note => (
                    <div onClick={() => props.switchNote(note._id)} key={note._id} className='note-link-container'>
                        <Link to={`/${note._id}`} className='note-link'>
                            <div className='note-card'>
                                <h6 className='note-title'>{note.title}</h6>
                                <span className='note-content'>{note.textBody}</span>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListView; 