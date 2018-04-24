import React from 'react';
import { Link } from 'react-router-dom';

export const TodoView = props => {
  const note = props.notes[props.match.params.id];
  return (
    <div className="TodoView">
      <div className="TodoView_links">
        <Link to={`/edit/${note.id}`}>edit</Link>
        <button onClick={() => {}}>delete</button>
      </div>
      <p className="TodoView_title">{note.title}</p>
      <p className="TodoView_body">{note.body}</p>
    </div>
  )
}