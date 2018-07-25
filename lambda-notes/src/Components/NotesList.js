import React from 'react';
import NoteCard from './NoteCard';

const NotesList = props => {
    return (
        props.noteEntries.map(noteEntry => {
            return (
                <NoteCard
                    noteEntry = {noteEntry}
                    key = {noteEntry.id}
                />
            );
        })
    );
}

export default NotesList;