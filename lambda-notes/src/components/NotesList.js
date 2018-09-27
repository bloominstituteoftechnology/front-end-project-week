import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';
import Sidebar from './Sidebar';

const NotesList = props => {
    console.log(props.notes);

    return (
        <div className="page-container">
            <Sidebar />
            <div className="section-container">
                <h1 className="notes-title"></h1>
                <div className="note-container">
                    {props.notes.map(note => {
                        return (
                            <div>
                                <Note
                                    note={note}
                                    key={note._id}
                                />
                            </div>
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