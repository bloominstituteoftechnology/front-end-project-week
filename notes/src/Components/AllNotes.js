import React from 'react';
import './allNotes.css';
const AllNotes = (props) => {
  return (
    <div className ="AllNotes_rail">
      <ul>
        {props.notes.map((note) => {
          return (
         
              <li key={props.notes.indexOf(note)}>{note.note}
                <p>{note.data}</p>
              </li>
              )
          })}
                     </ul>
                     </div>
)
}
export default AllNotes;