import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const MyNote = (props) => {
    const id = props.match.params.id;
    const note = props.notes.find(note => `${note._id}` === id);
    return(
     <div className="note">
        {/* <h3>{note.title}</h3>
        {note.textBody} */}
     </div>
    );
}

export default MyNote;
