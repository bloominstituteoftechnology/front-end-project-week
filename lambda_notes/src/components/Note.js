import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteNote, getSingleNote } from "../store/actions";
import { connect } from "react-redux";

class Note extends Component {
  constructor() {
    super();
    this.state = {
      note: {}
    };
  }
  componentDidMount() {
    if (this.props.notes.length > 0) {
      let singleNote = this.props.notes.find(
        note => note.id === this.props.match.params.noteId
      );
      this.setState({
        // note: this.props.note
        note: singleNote
      });
    }
  }
  // }

  render() {
    let SingleNote = this.props.notes.filter(
      note => note._id === this.props.match.params.noteId
    );

    if (!SingleNote.length) {
      return <h3>Retrieving Note...</h3>;
    }
    return (
      <>
        {console.log(SingleNote[0].textBody)}
        <div>
          <nav>
            <Link to={`/note-edit/${this.props.match.params.noteId}`}>
              edit
            </Link>
            <p
              onClick={() => {
                deleteNote(this.props.match.params.noteId);
                this.props.history.push("/notes");
              }}
            >
              delete
            </p>
          </nav>
          <h2>{SingleNote[0].title}</h2>
          <p>{SingleNote[0].textBody}</p>
        </div>
      </>
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
