import React, { Component } from "react";
import { viewNote } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DisplayNotes extends Component {
  state = {
    id: "",
  };

  render() {
    return (
      <div className="note-container">
        <h3 className="heading">Your Notes:</h3>
        <ul>
          {this.props.notes.map(note => {
            return (
              <li className="note-container notelist" key={note.id}>
                <Link
                  className="unstyledlink"
                  to={`/note/${note.id}`}
                  onClick={this.viewNote}
                >
                  <h4>{note.title}</h4> <hr /> <p>{note.text}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  viewNote = note => {
    this.props.viewNote(note);
    this.setState({ id: note.id });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { viewNote })(DisplayNotes);