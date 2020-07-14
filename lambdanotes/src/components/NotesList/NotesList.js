import React from 'react';
import { Link } from 'react-router-dom';
import './NotesList.css'

const NotesList = (props) => {
  console.log('NotesList props', props)
  return (
    <Link to={`/view/${props.id}`} style={{textDecoration:"none", color:"black"}}>
      <div className="Note">
        <div className="Note-Title">{props.note.title}</div>
        <hr />
        <div className="Note-Content">{props.note.content}</div>
      </div>
    </Link>
  )
}


export default NotesList;