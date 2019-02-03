import React from "react"
import Note from './Note'
import {NavLink} from 'react-router-dom'

const Notes = (props) => {
    return (
  <div ><h2 className="back">Your Notes:</h2>
      <div className="row d-flex justify-content-between">

        {
          props.notes.map(note => (
            <div className = "col note" key={note._id}>
            <NavLink to={`/notes/${note._id}`} >
              <Note  note={note} />
            </NavLink>
            </div>
          ))
        }
      </div>
      </div>
    );

};

export default Notes;
