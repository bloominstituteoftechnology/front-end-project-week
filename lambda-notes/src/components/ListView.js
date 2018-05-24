import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';
import './ListView.css';

const ListView = (props) => {
    return (
        <div className='list-container'>
            <div className='list-header'>
                <h4>Your Notes:</h4>
            </div>
            <div className='note-list'>
                {props.noteList.map(note => (
                    <div onClick={() => 
                        props.setCurrentNote(note.id)} key={note.id} className='note-card-link'> 
                        <Link to={`/${note.id}`} className='note-link'>
                            <div className='note-card'>
                                <h4 className='note-title'>{note.title}</h4>
                                <p className='note-content'>{note.textBody}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListView;