import React from 'react';
import Note from './Note';

const Notes = props => {
    return ( <div className = 'notes-wrapper'>
            {props.notes.map(notes => 
            <Note 
            key={notes.id} 
            notes={notes} 
            handleToggleComplete = {props.handleToggleComplete}
            /> )}

        </div>
        )
}

export default Notes;