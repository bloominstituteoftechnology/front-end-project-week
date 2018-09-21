import React from "react";
import { Link, Route } from "react-router-dom";
import DeleteNote from "./DeleteNote";

class OneNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      title: "",
      textBody: ""
    };
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };




  
  render() {
    const note = this.props.notes.find(note => {
      return note._id === this.props.match.params.id;
    });
    return (
      <div className="note-container">
        <div className="one-note">
          <Link to={`/notes/${note._id}/editnote`}>
            <button>Edit</button>
          </Link>

          <Link to={`/notes/${note._id}/deletenote`}>
            <button>Delete</button>
          </Link>

          <div>{note.title}</div>
          <div>{note.textBody}</div>


        </div>
      </div>
    );
  }
}

export default OneNote;
