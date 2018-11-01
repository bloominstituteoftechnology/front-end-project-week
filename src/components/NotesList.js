import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes } from "../store/actions";
import { Link } from "react-router-dom";
import "../App.css";

class Notes extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="listDisplay">
        <h1>Your Notes</h1>
        <div className="noteDisplay">
          {console.log(this.props.notes)}
          {this.props.notes.map(note => {
            return (
              <Link to={`/notes/${note.id}`}>
                <div className="notesDisplay" key={note.id}>
                  <h1>{note.title}</h1>
                  <p>{note.content}</p>
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
