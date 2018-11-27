import React from 'react';
import ReactDOM from 'react-dom';
import { sortable } from 'react-sortable'

const Note = props => {
    return (
        <div id={props.id} className='each-note' >
            <h4 className='each-note-title'>{props.title}</h4>
            <p>{props.textBody}</p>
        </div>
    )
}

var SortableNote = sortable(Note);
export default SortableNote;