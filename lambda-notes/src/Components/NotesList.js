import React from 'react';
import Note from './Note';

const NotesList = props => {
    return (
        <div>
        {console.log("this is" + props)}
        {props.notes.map(note => {
            return <Note note={note}/>;
        })}
        </div>
    );
};

export default NotesList;