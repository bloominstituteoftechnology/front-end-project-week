import React from 'react';
import '../App.css';
import Note from './Note';

const NoteList = props => {
    return (
        <section className = 'list-page'>
            <div className = 'page-header'>
                <h3>Notes</h3>
            </div>
        
            <div className = 'note-list'>
                {props.notes.map(note => {
                    return(
                        <Note
                        id={note._id}
                        key={note._id}
                        tags={note.tags}
                        title={note.title}
                        textBody={note.textBody}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default NoteList;