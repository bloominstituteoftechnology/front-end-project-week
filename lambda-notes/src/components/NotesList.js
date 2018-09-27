import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

const NotesList = props => {
    console.log(props.notes);
    return (
        <div className="page-container">
            <div className="section-container">
                <h1 className="notes-title"></h1>
                <div className="note-container">
                    {props.notes.map(note => {
                        return (
                            <Note
                                note={note}
                                deleteNote={props.deleteNote}
                                key={note._id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

export default NotesList;