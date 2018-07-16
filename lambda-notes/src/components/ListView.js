import React from 'react';
import NoteView from './NoteView';

const ListView = props => {
    return (
        <div className="ListView-container">
            <div className="ListView-header">
                <h2>Your Notes:</h2>
            </div>
            {props.notes.map((note, index) => {
                return (
                    <NoteView
                        key={index}
                        note={note}
                    />
                );
            })}
        </div>
    );

};

export default ListView;