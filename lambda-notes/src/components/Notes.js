import React from 'react';

const Notes = (props) => {
    return(
        <div>
            <h2>Your Notes:</h2>
            {this.props.notes.map(note => {
                <Note 
                id = {notes.indexOf(note)} 
                key = {note.id}
                />
            })}
        </div>
    )
}