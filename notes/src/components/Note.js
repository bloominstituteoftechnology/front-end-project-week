import React from "react";
import {NavLink} from 'react-router-dom';

const Note = props => {
  return ( 
    <div>
      Notes
        {props.notes.map((note, index) => (
          <div className="note" key={index}>
            <NavLink to={`/notes/${note._id}`}>
              <h1>{note.title}</h1>
            </NavLink>
            <p>{note.textBody}</p>
          </div>
        ))}
    </div>
   );
}
 
export default Note;

