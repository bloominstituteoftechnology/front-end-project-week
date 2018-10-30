import React from "react";
import {Link, Route} from "react-router-dom";

import DeleteModal from "./DeleteModal";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false
    };
    this.note = this.props.notes.find(
      myNote => `${myNote._id}` === this.props.match.params.id
    );
  }

  render() {
    //  const note = this.props.notes.find(
    //    myNote => `${myNote._id}` === this.props.match.params.id
    //  );
    //  console.log("Note View: ", note);
    //   console.log(props.notes);
    return (
      <div>
        <Link to="/edit">Edit</Link>
        <Link to="/delete">Delete</Link>
        <h2>{this.note.title}</h2>
        <p>{this.note.textBody}</p>
        <Route
          path={`/${this.note._id}/delete`}
          render={props => <DeleteModal />}
        />
        {/* Note View */}
      </div>
    );
  }
}

export default NoteView;
