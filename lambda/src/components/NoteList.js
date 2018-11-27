import React from 'react';
import NoteCard from './NoteCard'

const NoteList = (props) => {
    return(
        <div className="note-list">
            <div className="btn-section">
                <i className="fas fa-file-export export" onClick={() => props.export()}>Export As CSV</i>
                <div className="size-btns">
                    <i onClick={() => props.changeSize(true)} className="fas fa-th-large"></i>
                    <i onClick={() => props.changeSize(false)} className="fas fa-th"></i>
                </div>
            </div>
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

