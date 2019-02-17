import React from 'react'
import "../css/note.css"

const NavSaveList = props => {
  return <li className="nav-save-list-item">
          <div className="nav-save-lists-item" onClick={() => props.listHandler(props.id)} >{props.title}</div>
  </li>
};
export default NavSaveList;