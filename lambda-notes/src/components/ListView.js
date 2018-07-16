import React from 'react';
import NoteView from './NoteView';

const ListView = props => {
    return (
        <div className="ListView-container">
            <div className="ListView-header">
                <h2>Your Notes:</h2>
            </div>
            <div classname="ListView-NoteView">
                <NoteView />
            </div>
        </div>
    );

};

export default ListView;