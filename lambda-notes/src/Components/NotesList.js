import React from 'react';
import Note from './Note';

const NotesList = props => {
    return (
        props.noteEntries.map(noteEntry => {
            return (
                <Note
                    noteEntry = {noteEntry}
                    key = {noteEntry.id}
                />
            );
        })
    );
}

export default NotesList;