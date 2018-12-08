import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteNote, getSingleNote } from "../store/actions";
import { connect } from "react-redux";

class Note extends Component {
  componentDidMount = () => {
    getSingleNote(this.props.match.params._id);
  };

  render() {
    if (!this.props.note || this.props.fetchingNote) {
      return <h3>Retrieving Note...</h3>;
    }
    return (
      <div>
        <nav>
          <Link to={`/note-edit/${this.props.note.id}`}>edit</Link>
          <p
            onClick={() => {
              deleteNote(this.props.match.params._id);
              this.props.history.push("/");
            }}
          >
            delete
          </p>
        </nav>
        <h2>{this.props.textBody}</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ fetchingNote, note, notes }) => ({
  notes,
  note,
  fetchingNote
});

export default connect(
  mapStateToProps,
  { deleteNote, getSingleNote }
)(Note);
