import React from 'react';

const AllNotes = (props) => {
  return (
    <div>
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