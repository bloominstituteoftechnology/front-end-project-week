import React from "react";
import {NavLink} from 'react-router-dom';

import Search from './Search';
import '../css/note.css';

const Note = props => {
  return ( 
    <div className="allNotes">
      <h3 className="notePageTitle">Your Notes:</h3>
        {props.notes.map((note, index) => (
          <div className="note" key={index}>
            <NavLink className="noteTitle" to={`/notes/${note._id}`}>
              <h4 className="noteTitle">{note.title}</h4>
            </NavLink>
            <p className="noteText">{note.textBody}</p>
          </div>
        ))}
    </div>
   );
}
 
export default Note;

