import React from "react";
import { Link } from "react-router-dom";
import "./NoteView.css";
import DeleteNote from "./DeleteNote";
import { Route } from "react-router-dom";
import NewNote from "../NewNote/NewNote";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteNote: false };
  }

  editNote() {
    console.log("edit note : " + this.props.note.title);
  }

  deleteNote(e) {
    e.preventDefault();
    console.log("delete note : " + this.props.note.title);
    this.props.deleteNote(this.props.note.id);
    this.props.history.push("/");
  }

  toggleDeletePopUp() {
    console.log("toggle popup");
    this.setState(
      { deleteNote: !this.state.deleteNote },
      console.log(this.state)
    );
  }
  render() {
    return (
      <div className="note-view">
        <Link
          onClick={() => this.editNote()}
          to={`/notes/${this.props.note.id}/edit`}
        >
          Edit
        </Link>
        <Route
          path={`/notes/${this.props.note.id}/edit`}
          render={() => {
            return <NewNote note={this.props.note} />;
          }}
        />

        <Link
          onClick={e => {
            e.preventDefault();
            this.toggleDeletePopUp();
          }}
          to={`/notes/${this.props.note.id}/delete`}
        >
          Delete
        </Link>
        <h1>{this.props.note.title}</h1>
        <p>{this.props.note.content}</p>

        <div className={`popup`}>
          <span
            class={`popuptext ${this.state.deleteNote ? `show` : ``}`}
            id="myPopup"
          >
            Are you sure you want to delete this?
            <div className="delete-buttons">
              <div onClick={e => this.deleteNote(e)} className="button delete">
                Delete
              </div>
              <div onClick={e => this.toggleDeletePopUp(e)} className="button">
                No
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default NoteView;
