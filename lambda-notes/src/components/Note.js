import React from 'react';


const Note = ({note}) => (
    <div className="note">
     (id: {note.id}) {note.title}
    <hr />
    {note.text}
    </div>
);

export default Note;