import React from 'react';
import './Notes.css';


function Notes(props) {
return (
    <div className ="card">
        <h3 className="cardtitle">{props.note.title}</h3>
        <hr/>
        <p>{props.note.note}</p>
    </div>
)
}

export default Notes