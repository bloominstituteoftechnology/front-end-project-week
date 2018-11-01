import React from 'react';
import NoteCard from './NoteCard'

const NoteList = (props) => {
    return(
        <div className="note-list">
            <button className="export" onClick={() => props.export()}>Export As CSV</button>
            <i onClick={() => props.changeSize()} className="fas fa-th-large"></i>
            <i onClick={() => props.changeSize()} className="fas fa-th"></i>
            {props.notes.map(note => {
                return (<NoteCard 
                    size={props.size}
                    id={note._id} 
                    key={note._id} 
                    title={note.title} 
                    textBody={note.textBody} 
                    />)
            })}
        </div>
    );
}

export default NoteList;