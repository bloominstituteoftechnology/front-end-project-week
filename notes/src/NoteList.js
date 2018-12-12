import React from "react";
import Note from "./Note"
import './index.css';
import {Link} from "react-router-dom"

const NoteList = (props) => {
    return(
        <div className="notes-list">
        {
          props.notes.map( note => (
              <Link to={`/note/${note._id}`}key={note._id}>
                <Note  name={note._id} title={note.title} textBody={note.textBody} _id={note._id}/> 
              </Link>
            )
          )
        }
      </div>
    );
}

export default NoteList;