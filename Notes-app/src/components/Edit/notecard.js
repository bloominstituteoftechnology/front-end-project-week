import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SideBar } from "../Sidebar/sidebar";
import { deleteNote, fetchNote } from "../../actions";
import "./notecard.css";

export class NoteCard extends Component {
  state = {
    deleteForm: false,
    id: 0,
    note: {
      title: "",
      textBody: ""
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const newNote = this.props.notes.filter(note => {
      return note._id === id;
    });
    this.setState({ id: id });
    this.setState({ note: newNote[0] });
    this.props.fetchNote(id);
  }

  showDeleteHandler() {
    this.setState({ deleteForm: !this.state.deleteForm });
  }
  deleteHandler() {
    const index = this.state.id;
    let newNotes = this.props.notes.slice();

    function thisIndex(note) {
      return note.id === index;
    }

    const iFinder = newNotes.indexOf(newNotes.find(thisIndex));
    newNotes.splice(iFinder, 1);
    this.props.deleteNote(this.props.note._id);
  }
  render() {
    return (
      <div className="card-container">
        {this.state.deleteForm ? (
          <div className="delete-over">
            <div className="delete-container">
              <a> Are you sure you want to delete this? </a>
              <div className="btn">
                <Link to="/">
                  <button
                    type="button"
                    className="del"
                    onClick={() => this.deleteHandler()}
                  >
                    Delete
                  </button>
                </Link>

                <button className="no" onClick={() => this.showDeleteHandler()}>
                  No
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <SideBar />
        <section className="card">
          <div className="edit-delete">
            <Link to={`/edit/${this.state.id}`}>
              <a> edit </a>
            </Link>
            <a onClick={() => this.showDeleteHandler()}> delete </a>
          </div>
          <h1 className="notes-title">{this.props.note.title}</h1>
          <a className="note-content">{this.props.note.textBody}</a>
        </section>
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
  { deleteNote, fetchNote }
)(NoteCard);
