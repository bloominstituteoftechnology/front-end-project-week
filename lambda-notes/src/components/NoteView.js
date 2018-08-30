import React from 'react';
import { Link } from 'react-router-dom';

const NoteView = (props) => {

    const note = props.notes.find(note =>
        note._id == props.match.params._id)
        
    return(
        <div className='note-view'>
            <nav className='note-menu'>
                <ul className='note-menu-items'>
                    <li>
                        <Link to={`/edit/${props.match.params._id}`}>
                            edit
                        </Link>
                    </li>
                    <li>
                        <Link to={`/delete/${props.match.params._id}`}>
                            delete
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='note-display'>
                <h3 className='display-title'>{note.title}</h3>
                <p className='display-content'>{note.textBody}</p>
            </div>
        </div>
    );
}

export default NoteView;
