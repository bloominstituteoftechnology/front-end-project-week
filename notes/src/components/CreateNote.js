import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchNotes,
  fetchNote,
  addNote,
  // addTag,
  // deleteTag
} from "../actions/actions";

// import "../styles/App.css";
// import "../styles/Sidebar.css";
// import "../styles/CreateNote.css";

class CreateNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      added: false,
      tag: "",
      tags: []
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newNoteHandler = e => {
    e.preventDefault();
    this.props
      .addNote({
        title: this.state.title,
        content: this.state.content,
        user: this.props.user
      })
      // .then(() => this.props.fetchNotes())
      // .then(() => this.props.addTagsToNote(this.props.newNote))
      .then(() => this.props.fetchNotes())
      .then(() => this.props.fetchNote(this.props.newNote))
      .then(() =>
        this.setState({
          title: "",
          content: "",
          tag: "",
          added: true,
          tags: []
        })
      );
  };

  // newTagHandler = () => {
  //   this.props.addTag(this.state.tag);
  //   this.setState({ tag: ""});
  // };

  deleteTagHandler = (id) => {
    this.props.deleteTag(id);
  };

  render() {
    return this.state.added ? (
      <Redirect to="/" />
    ) 
    // : this.props.registered || this.props.loggedIn
    // ?
     : (
      <div className="componentContainer">
        <h2>Create New Note:</h2>
        <form onSubmit={this.newNoteHandler} method="post">
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

        {/* <div className="tagInput">
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
          {this.state.tags.map(tag => (
            <span key={tag.id}><div onClick={this.deleteTagHandler}>x</div>{`#${tag.tag},`}</span>
          ))}
        </div> */}
      </div>
    )
    // : (<div className="componentContainer">
    //   <div>Please register or login</div>
    // </div>)
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    tags: state.tags,
    tag: state.tag,
    newNote: state.newNote,
    note: state.note,
    noteTags: state.noteTags,
    newTag: state.newTag,
    registered: state.registered,
    loggedIn: state.loggedIn,
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { fetchNotes, fetchNote, addNote }
)(CreateNote);
