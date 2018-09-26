import React from 'react';

const NoteView = props => {
    console.log('noteview props:', props);
    console.log('noteview propsnotes:', props.notes)
    // eslint-disable-next-line
    const note = props.notes.find(note => note.id == parseInt(props.match.params.id, 10));
    console.log('from noteview:', note);
        
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    )
}


export default NoteView;
