import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
 
const Note = props => (
    <div className="note">
      <h2>
        <Link to={`/note/${props.note.id}`}>{props.note.title}</Link>
      </h2>
      <hr />
      <p>{props.note.content}</p>
    </div>
  );

export default Note; 