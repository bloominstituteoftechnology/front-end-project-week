import React from 'react';
import Note from "./Note";

const List = (props) => {
    return (
        <div className='list-block'>
            <h2>Your Notes:</h2>
            <div className='list'>
                {props.notes.map(note => (<Note key={note.id} note={note} />))}
            </div>
        </div>
    )
}

export default List;