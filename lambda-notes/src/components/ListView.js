import React from 'react';
import NoteView from './NoteView';
import Link from '../../node_modules/react-router-dom/Link';

const ListView = props => {
    return (
        <div className="ListView-container">
            <div className="ListView-header">
                <h2>Your Notes:</h2>
            </div>
            {props.notes.map((note, index) => {
                return (
                    <Link to={`/note/${index}`}>
                        <NoteView
                            key={index}
                            note={note}
                        />
                    </Link>
                );
            })}
        </div>
    );

};

export default ListView;