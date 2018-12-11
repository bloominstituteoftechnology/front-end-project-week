import React from "react";
import axios from "axios";
import DeleteModal from "./DeleteModal";

import Markdown from "markdown-to-jsx";
import { Route } from "react-router-dom";

class FullNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: {
        title: "",
        content: ""
      },
      isEditing: false,
      showDeleteModal: false,
      tags: []
    };
  }

  noteUrl = "https://fsw14-lambda-notes.herokuapp.com/api/notes";
  tagUrl = "https://fsw14-lambda-notes.herokuapp.com/api/tags";

  //sets particular note on state for viewing based on url the user was pushed to
  componentDidMount() {
    this.getNote();
    this.getTags();
  }

  getNote = () => {
    axios
      .get(`${this.noteUrl}/${this.props.match.params.id}`)
      .then(response =>
        this.setState({
          activeNote: {
            title: response.data.title,
            content: response.data.content
          }
        })
      )
      .catch(error => {
        console.log("The server failed to retrieve this note: ", error);
      });
  };

  getTags = () => {
    // parseInt necessary because anything coming off the params will be a string and 2 !== "2"
    const id = parseInt(this.props.match.params.id);
    axios
      .get(this.tagUrl)
      .then(response => {
        this.setState({
          tags: response.data.filter(tag => tag.notes_id === id)
        });
      })
      .catch(err => console.log("Error occurred while retrieving tags: ", err));
  };

  deleteTag = (event, id) => {
    event.preventDefault();
    axios
      .delete(`${this.tagUrl}/${id}`)
      .then(this.getTags)
      .catch(err => console.log("Error while deleting this tag: ", err));
  };

  //allows single page to render either view state or edit state without being taken to separate page/url
  toggleEditing = event => {
    event.preventDefault();
    this.setState({ ...this.state, isEditing: !this.state.isEditing });
  };

  //summons delete modal
  toggleModal = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      showDeleteModal: !this.state.showDeleteModal
    });
  };

  editChangeHandler = (key, value) => {
    this.setState({
      ...this.state,
      activeNote: {
        ...this.state.activeNote,
        [key]: value
      }
    });
  };

  editNote = event => {
    event.preventDefault();
    let note = this.state.activeNote;
    if (note.title !== "" && note.content !== "") {
      axios
        .put(
          `${this.noteUrl}/${this.props.match.params.id}`,
          this.state.activeNote
        )
        .then(response => {
          this.setState({ ...this.state, activeNote: response.data });
        })
        .catch(error => {
          console.log("We were unable to edit this note: ", error);
        });
      this.toggleEditing(event);
    } else {
      alert(
        "All notes must have a title and text. Please fill out both fields before submitting any changes"
      );
    }
  };

  render() {
    if (!this.state.isEditing) {
      return (
        <div className="note-full-view">
          <div className="edit-delete-wrapper">
            <p className="edit-button" onClick={this.toggleEditing}>
              edit
            </p>
            <p className="delete-button" onClick={this.toggleModal}>
              delete
            </p>
          </div>

          <h3 className="full-note-title">{this.state.activeNote.title}</h3>
          {/* allows markdown support for string being entered in text field */}
          <Markdown className="full-note-text">
            {this.state.activeNote.content}
          </Markdown>
          <section className="tag-wrapper">
            {this.state.tags.map(tag => (
              <div className="tag" key={tag.id}>
                <div
                  className="tag-delete-button"
                  onClick={event => this.deleteTag(event, tag.id)}
                >
                  X
                </div>
                <div className="tag-text">{tag.text}</div>
              </div>
            ))}
          </section>
          <Route
            render={ownProps => (
              <DeleteModal
                {...ownProps}
                show={this.state.showDeleteModal}
                toggleModal={this.toggleModal}
                deleteNote={this.props.deleteNote}
              />
            )}
          />
        </div>
      );
    } else {
      return (
        <div className="edit-note-wrapper">
          <h2>Edit Note:</h2>
          <form className="edit-note-form" onSubmit={this.editNote}>
            <input
              className="edit-note-title"
              type="text"
              placeholder="Note Title"
              name="title"
              value={this.state.activeNote.title}
              onChange={event =>
                this.editChangeHandler(event.target.name, event.target.value)
              }
            />
            <input
              className="edit-note-text"
              type="text"
              placeholder="Note Content"
              name="content"
              value={this.state.activeNote.content}
              onChange={event =>
                this.editChangeHandler(event.target.name, event.target.value)
              }
            />

            <button type="submit">Update</button>
          </form>
        </div>
      );
    }
  }
}

export default FullNote;
