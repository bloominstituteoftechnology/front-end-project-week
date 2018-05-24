import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';
import './App.css';
import './ListView.css';

const ListView = (props) => {
    return (
        <div className='list-container'>
            <div className='list-header'>
                <h4>Your Notes:</h4>
            </div>
            <div className='note-list'>
                {props.notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    )
}

export default ListView;