import React from 'react';
import Note from './Note';

export default (props) => {
    return(
        <div>
            {props.notes.map((note) => {
                return <Note title={note.title} note={note.textBody} key={note._id}/>
            })}
        </div>
    )
}