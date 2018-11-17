import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchNotes, addNote } from "../actions/actions";

import "../styles/App.css";
import "../styles/Sidebar.css";
import "../styles/CreateNote.css";

class CreateNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      added: false,
      tags: [],
      tag: ""
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
        textBody: this.state.textBody,
        tags: this.state.tags
      })
      .then(() => this.props.fetchNotes());
    this.setState({
      title: "",
      textBody: "",
      tags: [],
      tag: "",
      added: true
    });
  };

  newTagHandler = () => {
   this.setState({tags: [...this.state.tags, this.state.tag]})
   this.setState({tag: ""})
  //  .then(() => this.props.fetchNotes());
  };

  render() {
    return this.state.added ? (
      <Redirect to="/" />
    ) : (
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
            name="textBody"
            value={this.state.textBody}
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
          {this.state.tags.map(tag => <span key={Date.now()}>{`#${tag},`}</span>)}
          </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};
export default connect(
  mapStateToProps,
  { fetchNotes, addNote }
)(CreateNote);
