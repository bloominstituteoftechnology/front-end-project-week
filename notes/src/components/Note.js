import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getNotesById, deleteNote, getNotes } from "../actions";

import "../App.css";

const ReactMarkdown = require("react-markdown/with-html");

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      delete: false,
      markdown: "regular"
    };
  }

  componentDidMount() {
    this.props.getNotesById(this.props.match.params.noteId);
  }

  sortHandlerMarkdown = e => {
    console.log(e.target.value);
    this.setState({ ...this.state, markdown: e.target.value });
  };

  render() {
    if (this.props.isFetching) {
      return <h4>Loading items...</h4>;
    }
    return (
      <Fragment>
        <div className={`delete-${this.state.delete}`}>
          <div className="delete-container">
            <h3>Are you sure you want to delete this?</h3>
            <div className="btn-container">
              <button
                onClick={() => {
                  this.props.deleteNote(this.props.match.params.noteId);
                  this.props.getNotes();
                  this.props.history.push("/");
                }}
                className="delete-btn-yes"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  this.setState({ ...this.state, delete: !this.state.delete })
                }
                className="delete-btn-no"
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="note-wrapper">
          <nav className="sub-nav">
            <div className="sub-nav-links">
              <NavLink exact to={`/edit-note/${this.props.note._id}`}>
                <button className="sub-nav-btn sub-nav-links-fix">edit</button>
              </NavLink>
              <button
                className="sub-nav-btn"
                onClick={() =>
                  this.setState({ ...this.state, delete: !this.state.delete })
                }
              >
                delete
              </button>
            </div>
          </nav>
          <div className="sort-markdown">
            <select onChange={this.sortHandlerMarkdown}>
              <option value="" selected>
                Mark Down?
              </option>
              <option value="regular">Regular</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>
          <div className="note-body">
            <Fragment>
              {this.state.markdown === "markdown" ? (
                <ReactMarkdown
                  className="markdown-title"
                  source={this.props.note.title}
                  escapeHtml={false}
                />
              ) : (
                <h2>{this.props.note.title}</h2>
              )}
            </Fragment>
            <Fragment>
              {this.state.markdown === "markdown" ? (
                <ReactMarkdown
                  className="markdown-content"
                  source={this.props.note.textBody}
                  escapeHtml={false}
                />
              ) : (
                <p>{this.props.note.textBody}</p>
              )}
            </Fragment>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note,
  isFetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getNotesById, deleteNote, getNotes }
)(Note);
