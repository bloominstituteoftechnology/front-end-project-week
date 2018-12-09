import React from 'react';

const IndividualNote = props => {
    const note = props.notesData.find(note => `${note.id}` === props.match.params.id);
    if (!note) {
        return <h2>Note not found...</h2>
    }

    return(
        <div className='note-page'>
            <h2 className='note-page-title'>{note.title}</h2>
            <p className='note-page-text'>{note.textBody}</p>
        </div>
    );
}

export default IndividualNote;