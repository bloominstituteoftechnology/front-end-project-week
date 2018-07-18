import React from 'react';
import './index.css'
import Note from '../Note/Note';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return (
        <div className='main-container'>
            <div className='noteList-container'>
                <div className="note-header"><h2>Your Notes:</h2></div>
                <div className="noteList">
     :
                    {props.notes.map(note => <Link to='/view' style={{ textDecoration : 'none' }}><Note tittle = {note.title} body={note.body} key={note.id} /></Link>)}
                </div>
            </div>
        </div>
    );
};

export default ListView;