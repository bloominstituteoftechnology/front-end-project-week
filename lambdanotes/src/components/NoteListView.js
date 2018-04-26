import React from 'react';
import './NoteListView.css';

const NoteListView = ({ form, children }) => {
    return (
        <main className="note-list-view">
            <div className="title">
                Lambda Notes
            </div>
            <div className="activity-buttons">
                { form }
            </div>
            <div className="list-wrapper">
                <h3>Your Notes:</h3>
                { children }
            </div>
        </main>
    );
};

export default NoteListView;