import React from "react";
import { Link } from "react-router-dom";

const SingleNote = props => {
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );
    console.log(props);
    console.log(props.match.params.id);
    console.log(note);
    return (
      <div>
        <p>
          {" "}
          <Link to={`/note/${note._id}/edit`}>edit</Link> delete
        </p>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
      </div>
    );
  } else {
    return <h2>Loading Note...</h2>;
  }
};

export default SingleNote;
