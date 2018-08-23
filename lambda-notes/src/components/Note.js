import React from 'react';

const Note = props => {
    if (props.data) {
        return (
            <div>
                {props.data.title}
                <br></br>
                {props.data.content}
            </div>
        )
    } else {
        const id = Number(props.match.params.id.replace(':', ''));
        const note = props.fetchNote(id);
        return (
            <div>
                {note.title}
                <br></br>
                {note.content}
            </div>
        )
    }
};

export default Note;