import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteAPI from './NoteAPI';
import DeleteModal from './Modal';

const Note = (props) => {
  const note = NoteAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!note) {
    return <div>Sorry, but the note was not found</div>
  }
  return (
    <div className="full-view">
      <div className="full-view-links">
        <Link to='/editnote'>edit</Link>{' '}
        {/* <Link to='/editnote'>delete</Link> */}
        <DeleteModal />
      </div>
      <div className="full-view-content">
        <div className="full-view-title">
          <h2>{note.title}</h2>
        </div>
        <p>{note.content}</p>
      </div>
      <Link to='/list'>Back</Link>
    </div>
  )
}

export default Note;