import React from 'react';
import { Link } from 'react-router-dom';

const NoteView = (props) => {

    const note = props.notes.find(note =>
        note._id == props.match.params._id)
        
    return(
        <div className='note-view'>
            <div className='note-menu'>
                <div className='note-menu-items'>
                    <Link to={`/edit/${props.match.params._id}`}>
                        edit
                    </Link>
                </div>
                <div className='note-menu-items'>
                    <Link to={`/delete/${props.match.params._id}`}>
                        delete
                    </Link>
                </div>                
            </div>
            <header className='note-header'>
                <h3 className='display-title'>{note.title}</h3>
            </header>
            <div className='note-display'>
                <p className='display-content'>{note.textBody}</p>
            </div>
        </div>
    );
}

export default NoteView;
