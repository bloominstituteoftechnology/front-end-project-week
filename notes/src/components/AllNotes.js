import React from 'react';
import PropTypes from 'prop-types';

function AllNotes(props) {
    if (!props.notesData || !props.notesData.length) {
        return (
        <div><h3>You don't have any Notes yet. :(</h3>
            <p>Try adding a new Note by clicking the <strong>+ Create New Note</strong> button! :)</p></div>
        )
    }


    return (
        
        <div className="notes-list-wrapper">
        <h3>Your Notes:</h3>
            <div className="all-notes">
            {props.notesData.map(note => (
                <div className="note-card" key={note.id} onClick={() => props.history.push(`notes/${note.id}`)}>
                    <h4>
                    {note.title}
                    </h4>
                    <p>{props.truncate(note.content)}</p>
                </div> 
            ))}
            </div>
        </div>
    )
}

AllNotes.propTypes = {
    notesData: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

export default AllNotes;