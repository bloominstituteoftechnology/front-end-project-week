import React from 'react';
import Note from './Note';

let Notes = props => {
    return (
        <div className='notes'>
            {props.notes.map(note => <Note key={note.id} note={note} deleteHandler={props.deleteHandler}/>)}
        </div>
    )
}

export default Notes;