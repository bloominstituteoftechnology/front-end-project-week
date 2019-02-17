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
                {props.notes.map(notes => {
                    return(
                        <Note key = {notes.id} tags = {notes.tags} title = {notes.title} textBody = {notes.textBody} />
                    )
                })}
            </div>
        </section>
    )
}

export default NoteList;