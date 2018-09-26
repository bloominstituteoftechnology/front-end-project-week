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

  componentDidMount() {
    if (!this.props.note) {
      // this.props.history.push("/");
    }
  }
  editNote(e) {
    // e.preventDefault();
    // console.log("edit note : " + this.props.note.title);
    // this.props.updateNote(this.props.note.id);
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
      <div
        className={`notes-container ${this.state.deleteNote ? `opaque` : ``}`}
      >
        <div className="note-links">
          <Link
            className="note-links"
            onClick={e => this.editNote(e)}
            to={`/notes/${this.props.note.id}/edit`}
          >
            edit
          </Link>

          <Link
            className="note-links"
            onClick={e => {
              e.preventDefault();
              this.toggleDeletePopUp();
            }}
            to={`/notes/${this.props.note.id}/delete`}
          >
            delete
          </Link>
        </div>
        <h1 className="note-heading">{this.props.note.title}</h1>
        <p className="note-paragraph">{this.props.note.content}</p>

        <div className={`popup`}>
          <span
            className={`popuptext ${this.state.deleteNote ? `show` : ``}`}
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
