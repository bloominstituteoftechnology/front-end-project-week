import React from "react";
import NoteForm from "../components/NoteForm";
import { connect } from "react-redux";
import { addNote } from "../actions";

class CreateNoteContainer extends React.Component {
  state = {
    title: "",
    textBody: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div>
        <h1>Create New Note:</h1>
        <NoteForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          content={this.state.textBody}
        />
        {this.props.addingNote && <p>addin ur note...</p>}
        {this.props.updated && <p>Note added!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  updated: state.notesReducer.noteAddSuccess,
  addingNote: state.notesReducer.addingNote
})

export default connect(
  mapStateToProps,
  { addNote }
)(CreateNoteContainer);
