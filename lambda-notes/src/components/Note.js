import React from 'react';

const Note = props => {
    if (props.data) {
        return (
            <div className='note-container'>
                <div className='note'>
                    {props.data.title}
                    <br></br>
                    {props.data.content}
                    <br></br>
                    <br></br>
                </div>
            </div>
        )

    } else {
        const id = Number(props.match.params.id.replace(':', ''));
        const note = props.fetchNote(id);
        return (
            <div>
                {note.title}
                <br></br>
                <br></br>
                {note.content}
                <br></br>
                <br></br>
                <button>Edit</button>
                <button onClick={props.deleteNoteHandler(id)}>Delete</button>
            </div>
        )
    }
};

export default Note;