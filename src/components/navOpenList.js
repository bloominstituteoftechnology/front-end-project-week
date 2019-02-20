import React from 'react'
import "../css/note.css"

const NavOpenList = props => {
  return <li className="nav-note-list-item">
          <div className="nav-note-lists-item" onClick={() => props.viewNoteList(props.list, props.id)} >{props.listTitle}</div>
  </li>
};
export default NavOpenList;