import React from 'react';
import Note from "./Note";

const List = (props) => {
    return (
        <div className='list'>
            {props.notes.map(note => (<Note key={note.id} note={note} />))}
        </div>
    )
}

export default List;