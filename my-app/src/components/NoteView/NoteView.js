import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const NoteView = props => {
  const note = props.notes.find(note => {
    return note._id === props.match.params.monkey;
  });
  return (
    <div>
      <Link exact to="/">
        Home
      </Link>
      <br />
      <Link exact to={`/editnote/${props.match.params.monkey}`}>
        Edit
      </Link>
      {/* <br />
      <Link exact to={`/deletenote/${props.match.params.monkey}`}>
        Delete
      </Link> */}
      <br />
      <h2>{note.title}</h2>
      <br />
      <h2>{note.textBody}</h2>
      <SideMenu />
    </div>
  );
};

export default NoteView;
