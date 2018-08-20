import React from 'react';
import Note from './Note';
import './listview.css';

const ListView = props => {
    return (
        <div className="list-view">
            <h2>Your Notes: </h2>
            {props.notes.map((note, index) => <Note key={index} title={note.title} text={note.text} />)}
        </div>
    );
}

export default ListView;