import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewNote, updateNote } from "../store/actions";
import "../App.css";

class NoteForm extends Component {
  state = {
    note: {
      title: "",
      textBody: "",
      _id: ""
    },
    updatingNote: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.updatingNote) {
      this.handleUpdateNote();
    } else {
      this.handleAddNewNote(event);
    }
  };

  handleChange = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value
      }
    });
  };

  addTodoHandler = e => {
    e.preventDefault();
    this.props.addNewNote(this.state);
    this.props.history.push("/notes");
  };

  componentDidMount() {
    if (this.props.noteToUpdate) {
      this.setState({
        updatingNote: true,
        note: this.props.noteToUpdate
      });
    }
  }

  handleUpdateNote = () => {
    console.log(this.state.note);
    this.props.updateNote(this.state.note);
    this.props.history.push("/notes");
  };

  handleAddNewNote = event => {
    event.preventDefault();
    this.props.addNewNote(this.state.note);
    this.props.history.push("/notes");
  };
  render() {
    return (
      <React.Fragment>
        <h2 className="edit-delete">
          {this.props.updatingNote ? "Create New Note" : "Edit Note:"}
        </h2>
        <form className="Column-Layout">
          <input
            className="input-title"
            value={this.state.note.title}
            name="title"
            type="text"
            placeholder="Note Title"
            onChange={this.handleChange}
          />
          <input
            className="input-body"
            value={this.state.note.textBody}
            name="textBody"
            type="text"
            placeholder="Note Content"
            onChange={this.handleChange}
          />
          <h3 onClick={this.handleSubmit}>Submit</h3>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    noteToUpdate: state.noteToUpdate
  };
};

export default connect(
  mapStateToProps,
  {
    addNewNote,
    updateNote
  }
)(NoteForm);