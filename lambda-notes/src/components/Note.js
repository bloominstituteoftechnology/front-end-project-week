import React from 'react';

const Note = props => {
    return (
        <div className="Note">
            {props.notes.map(note => {
                return(
                    <div>
                        <h2>{note.title}</h2>
                        <p>{note.textBody}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Note;
