import React from 'react';


const Notes = (props) => {
   
        return <li key={props.note.id} className="note">
            <div className="note-name">{props.note.title}</div>
            <div className="note-content">{props.note.content}</div>
            </li>;
    }


export default Notes;