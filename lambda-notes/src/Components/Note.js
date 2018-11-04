import React from 'react';
import { Link } from 'react-router-dom';




const Note = props => {
  return (
    <div className="note">
      <input type="checkbox" name="note-check" value="checked" />
      <h3>
        <Link to={`/note/${props.note._id}`} className="note-title">{props.note.title}</Link>
        <hr/>
      </h3>
      <p>{props.note.textBody}</p>
    </div> 
  )
}

export default Note;
