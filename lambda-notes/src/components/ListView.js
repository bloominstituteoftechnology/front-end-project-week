import React from 'react';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return(
        <div className='list-view'>
            <h3>Your Notes</h3>
            {props.notes.map(note => (
                <div className='note-card' key={note._id}>
                    <Link to={`/notes/${note._id}`}>
                        <h3>{note.title}</h3>
                    </Link>
                    <p>{note.textBody}</p>
                </div>
            ))}
        </div>
    );
}

export default ListView;
