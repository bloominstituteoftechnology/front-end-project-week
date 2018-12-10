import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNotes } from "../actions";

class NoteList extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    if (this.props.fetching) {
      return (
        <div className="note-list">

          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="note-list">
          <h2 className="your-notes">Your Notes:</h2>

          <ul>
            {this.props.notes.map(note => {
              return (
                <div className="note">
                  <div key={note.id} className="title">
                    <Link to={note._id}>{note.title}</Link>
                  </div>
                  <div className="content">{note.textBody}</div>
                </div>
              );
            })}
          </ul>

        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    notes: state.note,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(NoteList);

