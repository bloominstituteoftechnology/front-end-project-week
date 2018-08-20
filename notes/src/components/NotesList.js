import React from 'react';
import Note from './Note';

const NotesList = () => {

        return (
                <div className = "all-notes">
                <div className = "your-notes">
                    <h2>
                    Your Notes
                    </h2>
                </div>
                <div className = "note-container">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
            </div>
        )
    }

export default NotesList;