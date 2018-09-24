import React from "react";
import {Link} from 'react-router-dom'

const YourNotes = props => {
  return(
    
  <div className={'notes-container'}>
  <h2>Your Notes:</h2>
  {props.notes.map(note => {
    return (
      <div className={'notes-list-view'} key={note._id}>
       <Link to={`/notes/${note._id}`}>
        <h3 className={'note-title'}>{note.title}</h3>
        <p className={'note-body'}>{note.textBody}</p>
        </Link>
      </div>
    );
  })}
</div>
  )
};

export default YourNotes;
