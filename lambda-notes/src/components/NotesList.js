import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

const NotesList = props => {
    console.log(props.notes);
    return (
        <div>
            {props.notes.map(note => {
                return (
                    <Note 
                        note={note}
                        deleteNote={props.deleteNote}
                        key={note.id}
                    />
                )
            })}
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