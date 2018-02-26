import React from 'react';


// props include the list of notes from App.js
const NoteList = props => {
  return (
    <div className="notelist__container">
      <ul className="notelist">
        {props.notes.map(note => {
          return (
            <li className="notelist__item">{note}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default NoteList;