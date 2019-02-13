
import React from 'react'
import "../css/note.css"

const NavNoteList = props => {
  return <li className="nav-note-list-item">
          <div className="nav-note-lists-item" onClick={() => props.noteView(props.id)} >{props.title}</div>
  </li>
};
export default NavNoteList;


 
 
 
 
 