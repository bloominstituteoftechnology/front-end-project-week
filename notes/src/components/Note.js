import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getNotesById, deleteNote, getNotes } from "../actions";
class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      delete: false
    };
  }

  componentDidMount() {
    this.props.getNotesById(this.props.match.params.noteId);
  }

  render() {
    if (this.props.isFetching) {
      return <h4>Loading items...</h4>;
    }
    return (
      <Fragment>
        <div className={`delete-${this.state.delete}`}>
          <h3>Are you sure you want to delete this?</h3>
          <div>
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
              onClick={() => this.setState({ delete: !this.state.delete })}
              className="delete-btn-no"
            >
              No
            </button>
          </div>
        </div>
        <div className="notes-wrapper">
          <nav className="sub-nav">
            <div className="sub-nav-links">
              <NavLink exact to={`/edit-note/${this.props.note._id}`}>
                <button>Edit Note</button>
              </NavLink>

              <button
                onClick={() => this.setState({ delete: !this.state.delete })}
              >
                Delete Note
              </button>
            </div>
          </nav>
          <div className="note-body">
            <h2>{this.props.note.title}</h2>
            <p>{this.props.note.textBody}</p>
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
