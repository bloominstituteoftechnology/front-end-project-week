import React from 'react'
import './NoteList.css'

const NoteList = props => {
 return (
  <div>
   <h1 className="note_list_titles">{props.title}</h1>
  </div>
 );
}

export default NoteList;
