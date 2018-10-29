import React from 'react';
import Note from './Notes';

const NotesList = props => {
    return (
        <div className="container">
            {props.notes.map(item => <Note note={item} key={item.id} deleteItem={props.deleteItem} updateItem={props.updateItem} />)}
        </div>
    );
}

export default NotesList;