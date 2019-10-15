import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchNote,
  updateNote,
  fetchNotes,
  deleteTag,
  addTag
} from "../actions/actions";

import "../styles/App.css";
import "../styles/CreateNote.css";
import "../styles/Sidebar.css";

class EditNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      id: null,
      edited: false,
      tags: [],
      tag: ""
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNote(this.props.match.params.id).then(() => {
      this.setState({
        title: this.props.note.title,
        content: this.props.note.content,
        id: this.props.note.id,
        tags: this.props.noteTags
      });
    });
  }

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editNote = event => {
    event.preventDefault();
    const { title, content, id } = this.state;
    // let oldTags = this.props.tags.filter(tag => tag !== this.props.note._id);
    let editedNote = { title, content, id, user: this.props.user };
    this.props.updateNote(editedNote);
    this.setState({ edited: true });
  };

  newTagHandler = () => {
    const { tag, id } = this.state;
    this.props.addTag({ tag: tag, note_id: id });
    this.props.fetchNote(this.props.match.params.id).then(() => {
      this.setState({
        title: this.props.note.title,
        content: this.props.note.content,
        id: this.props.note.id,
        tags: this.props.noteTags,
        tag: ""
      });
    });
  };

  deleteTagHandler = id => {
    this.props.deleteTag(id);
    this.props.fetchNote(this.props.match.params.id).then(() => {
      this.setState({
        title: this.props.note.title,
        content: this.props.note.content,
        id: this.props.note.id,
        tags: this.props.noteTags,
        tag: ""
      });
    });
  };

  render() {
    return this.state.edited ? (
      <Redirect to="/" />
    ) : (
      // this.props.registered || this.props.loggedIn
      // ?
      <div className="componentContainer">
        <h2>Edit Your Note:</h2>
        <form onSubmit={this.editNote} method="post">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.inputChange}
            placeholder="Note Title"
          />
          <textarea
            cols="50"
            rows="25"
            name="content"
            value={this.state.content}
            onChange={this.inputChange}
            placeholder="Note Content"
          />

          <button type="submit" className="sidebarButton createButton">
            Save
          </button>
        </form>

        <div className="tagInput">
          <div className="inputBox">
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.inputChange}
              placeholder="Note Tag"
            />
            <button
              className="sidebarButton createButton"
              onClick={this.newTagHandler}
            >
              Add New Tag
            </button>
          </div>
        </div>
        <div>
          <h3>Tags:</h3>
          {this.props.tags
            .filter(tag => tag.note_id === this.props.note.id)
            .map(tag => (
              <span key={tag.id}>
                <span onClick={() => this.deleteTagHandler(tag.id)}>x</span>
                {`#${tag.tag},`}
              </span>
            ))}
        </div>
      </div>
      //   </div>
    );
    // : (<div className="componentContainer">
    //   <h2>Please Register or Login</h2>
    // </div>)
  }
}

const mapStateProps = state => {
  return {
    note: state.note,
    tags: state.tags,
    noteTags: state.noteTags,
    tag: state.tag,
    newTag: state.newTag,
    registered: state.registered,
    loggedIn: state.loggedIn,
    id: state.id,
    user: state.user
  };
};

export default connect(
  mapStateProps,
  { fetchNote, updateNote, fetchNotes, deleteTag, addTag }
)(EditNote);
