import React from 'react';
import PropTypes from 'prop-types';

function AllNotes(props) {
    if (!props.notesList || !props.notesList.length) {
        return (
        <div><h3>You don't have any Notes yet. :(</h3>
            <p>Try adding a new Note by clicking the <strong>+ Create New Note</strong> button! :)</p></div>
        )
    }

    return (
        <div className="notes-list-wrapper">
            {props.notesList.map(note => (
                <div className="note-card" key={note.id}>
                    <h3 onClick={() => props.history.push(`notes/${note.id}`)}>
                    {note.title}
                    </h3>
                    <p>{note.content}</p>
                </div> 
            ))}
        </div>
    )
}

AllNotes.propTypes = {
    notesList: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

export default AllNotes;