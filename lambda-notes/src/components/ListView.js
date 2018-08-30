import React from 'react';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return(
        <div className='list-view'>
            <h3 className='list-header'>Your Notes</h3>
            <div className='card-container'>
            {props.notes.map(note => (
                <div className='note-card' key={note._id}>
                    <Link to={`/notes/${note._id}`}>
                        <h3 className='note-title'>{note.title}</h3>
                    </Link>
                    <p className='note-content'>{note.textBody}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ListView;
