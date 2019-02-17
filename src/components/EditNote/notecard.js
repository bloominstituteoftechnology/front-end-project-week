import React from "react";
import SideBar from "../Sidebar/sidebar";
import "./notecard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteNote, fetchSingleNote } from "../../actions";

class NoteCard extends React.Component {
  state = {
    deleteFormShow: false,
    id: 0,
    note: {
      title: "",
      textBody: ""
    }
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleNote(id);
    this.setState({ id: id });
  }

  componentWillReceiveProps(props) {
    if (props.note && props.note.note && props.note.note[0]) this.setState({
        note: props.note.note[0]
    });
    return true
  }

  showDeleteHandler() {
    this.setState({ deleteFormShow: !this.state.deleteFormShow });
  }
  deleteHandler() {
    const index = this.state.id;
    let newNotes = this.props.notes.slice();

    function isIndex(note) {
      return note.id === index;
    }
    const idFinder = newNotes.indexOf(newNotes.find(isIndex));
    newNotes.splice(idFinder, 1);

    this.props.deleteNote(this.props.note.note[0].id);
    window.location.href = '/';
  }
  render() {
    return (
      <div className="card-page-container">
        {this.state.deleteFormShow ? (
          <div className="delete-overlay">
            <div className="delete-container">
              <a>Are you sure you want to delete this?</a>
              <div className="btn-container">
                <button
                  type="button"
                  className="overlay-btn delete"
                  onClick={() => this.deleteHandler()}
                >
                  Delete
                </button>
                <button
                  className="overlay-btn"
                  onClick={() => this.setState({ deleteFormShow: false })}
                >
                  {""}
                  No
                  {""}
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <SideBar />

        <div className="section-container">
          <div className="edit-delete">
            <Link to={`/edit/${this.state.id}`}>
              <a>edit</a>
            </Link>
            <a onClick={() => this.showDeleteHandler()}> delete </a>
          </div>
          <div className="note-container">
          <div className="note">
          <h1 className="notes-title card">{this.state.note.title}</h1>
          <a className="single-notes-content">{this.state.note.content}</a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    note: state.note
  };
};
export default connect(
  mapStateToProps,
  { deleteNote, fetchSingleNote }
)(NoteCard);
