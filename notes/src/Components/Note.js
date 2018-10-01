import React from 'react';

const Note = props => {
    return (
        <div>
            {props.notes.map(note => 
            <div key={props.id}>
            <h3 onClick={() => props.history.push(`/notes/${props.id}/`)}>
                {props.title}
            </h3>
            <p>{props.textBody}</p>
            </div>
            )}
        </div>
    );
};

export default Note;