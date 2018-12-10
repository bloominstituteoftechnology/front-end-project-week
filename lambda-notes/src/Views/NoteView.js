import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NoteView.css'
import { Modal } from '../components';

const toggleValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    toggle: () => setValue(!value)
  };
}


export const NoteView = props => {
  const displayModal = toggleValue(false)
  // const { id } = props;
  // const urlParam = props.location.state.id;
  const id = props.match.params.id
  const note = props.notes.find(note => (
    note.id == props.match.params.id)
  )
  // const { note } = props
  console.log('note', note)
  if (!note) {
    return (
      <div>loading (note may have been deleted)</div>
    )
  } else {
    return (
      <div className="NoteView">
      {displayModal.value ?( 
        <Modal 
          note={note}
          delete={e => {
            props.deleteNote(note)
          }} 
          toggle={displayModal.toggle}/>
      ) : ''}
      <div className="controls">
        <Link to={`/note/edit/${id}`}>
          <span className="edit">edit</span>
        </Link>
        <span className="delete" onClick={(e)=>{
          displayModal.toggle()
        }}>delete</span>
      </div>
      <h2>
        {note.title}
      </h2>
      <p>
        {note.content}
      </p>
    </div>
    )
  }
}