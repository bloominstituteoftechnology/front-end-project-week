import React from 'react';
import NoteItem from './NoteItem';
import './listview.css';

const ListView = props => {
    return (
        <div className="list-view">
            <h2>Your Notes: </h2>
            <div className="notes-container">
                {props.notes.map((note, index) => <NoteItem key={index} title={note.title} text={note.text} />)}
            </div>
        </div>
    );
}

export default ListView;