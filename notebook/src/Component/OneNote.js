import React from "react";
import { Link, Route } from "react-router-dom";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";
// import uuid from "uuid";

class OneNote extends React.Component {
  state = {
    title: "",
    textBody: ""
  };



  render() {
    const note = this.props.notes.find((note) => {
      return note._id == this.props.match.params.id
    })
    return (

      <div className="note-container">
          <div className="each-ind-note">
            <div>Testing this notes</div>
            <div>{note.title}</div>
            <div>{note.textBody}</div>

            <Link to={`/notes/${note._id}/editnote`}>
              <button>Edit</button>
            </Link>

            <Link to={`/notes/${note._id}/deletenote`}>
              <button>Delete</button>
            </Link>
          </div>
        <Route path="/notes/:id/editnote" Component={EditNote} />
        <Route path="/notes/:id/deletenote" Component={DeleteNote} />
      </div>
    );
  }
}

export default OneNote;
