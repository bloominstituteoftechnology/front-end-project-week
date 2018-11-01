import React from 'react';
import NoteCard from './NoteCard'

const NoteList = (props) => {
    return(
        <div className="note-list">
            <button className="export" onClick={() => props.export()}>Export As CSV</button>
            <i class="fas fa-th-large"></i>
            <i class="fas fa-th"></i>
            {props.notes.map(note => {
                return (<NoteCard id={note._id} key={note._id} title={note.title} textBody={note.textBody} />)
            })}
        </div>
    );
}

export default NoteList;