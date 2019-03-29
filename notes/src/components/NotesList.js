import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes } from "../store/actions";
import { Link } from "react-router-dom";


class Notes extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="listDisplay">
        <h1>Your Notes</h1>
        <div className="noteDisplay">
          {this.props.notes.map(note => {
            return (
              <Link to={`/note/${note._id}`}>
                <div className="notesDisplay" key={note._id}>
                  <h1>{note.title}</h1>
                  <p>{note.textBody}</p>
                </div>
              </Link>
            );
          })}
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
  {
    getNotes
  }
)(Notes);