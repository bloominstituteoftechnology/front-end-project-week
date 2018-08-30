import React from "react";
import {Link} from 'react-router-dom';

const NoteView = props => {
  const note = props.noteList.find(
    eachNote => eachNote._id === Number(props.match.params.id)
  );
  return (
    <div>
      <div>
        {console.log(note)}
        <div key={note._id}>
          <div>{note.tags}</div>
          <div>{note.title}</div>
          <div>{note.textBody}</div>
        </div>
        <Link to={`/edit/${note._id}`}><button>Edit</button></Link>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default NoteView;
