import React, { Component } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import { quillModules, quillFormats } from "../../helpers/quillEditor";

class EditNote extends Component {
  constructor(props) {
    super(props);

    // refs for form
    this.titleInput = React.createRef();
    this.textBodyInput = React.createRef();

    this.state = {
      editedNote: {
        title: "",
        textBody: ""
      }
    };
  }

  handleEditFormChange = e => {
    this.setState({
      ...this.state.editedNote,
      textBody: e
    });
  };
  editNote = e => {
    e.preventDefault();

    const { note, firestore, history } = this.props;

    // updated note
    const updatedNote = {
      title: this.titleInput.current.value,
      textBody: this.state.textBody
    };

    // send updated note to firestore
    firestore
      .update({ collection: "notes", doc: note.id }, updatedNote)
      .then(history.push(`/`));
  };
  render() {
    const { note } = this.props;

    if (note) {
      return (
        <div className="note-form">
          <h1>Edit Note:</h1>
          <form onSubmit={this.editNote}>
            <input
              type="text"
              placeholder="Note Title"
              name="title"
              required
              minLength="2"
              defaultValue={note.title}
              ref={this.titleInput}
              maxLength="100"
            />
            <ReactQuill
              id="create-note-body"
              cols="30"
              rows="20"
              placeholder="Note comment"
              required
              minLength="2"
              defaultValue={note.textBody}
              onChange={this.handleEditFormChange}
              modules={quillModules}
              formats={quillFormats}
            />
            <input type="submit" id="create-submit" value="Save" />
          </form>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "notes", storeAs: "note", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    note: ordered.note && ordered.note[0]
  }))
)(EditNote);
