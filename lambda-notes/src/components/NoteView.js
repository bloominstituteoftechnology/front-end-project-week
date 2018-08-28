import React from 'react';
import { NavLink } from 'react-router-dom';

const NoteView = (props) => {

    const note = notes.find(note =>
        note.id === props.match.params.id)
        
    return(
        <div className='note-view'>
            <nav className='note-menu'>
                <ul className='note-menu-items'>
                    <li>
                        <NavLink to='/edit'>
                            edit
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/delete'>
                            delete
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='note-card'>
                <h3>{note.title}</h3>
                <p>{note.textBody}</p>
            </div>
        </div>
    );
}

export default NoteView;
