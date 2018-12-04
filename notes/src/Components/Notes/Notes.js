import React from 'react';

const Note = props => {

    return (
        <div>
            {props.note.title},
            {props.note.textBody}
        </div>
    )
}

export default Note;