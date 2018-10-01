import React from 'react';
import Note from "./Note";

const List = (props) => {
    return (
       <div>
           {props.notes.map(note => (<Note note={note} />))}
       </div>
    )
}

export default List;