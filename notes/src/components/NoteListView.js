import React from 'react';

const NoteListView = (props) => {
    return (
        <div>
            {props.noteContent.map(note => {
                return (
                    <div key={note._id}>
                        <h3>{note.title}</h3>
                        <p>{note.textBody}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default NoteListView;