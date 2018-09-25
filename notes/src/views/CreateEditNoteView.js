import React from "react";
import CreateEditNote from "../components/CreateEditNote";

import React from "react";
import { connect } from "react-redux";

import { addNewNote, updateNote } from "../store/actions";

class CreateEditNoteView extends React.Component {
  state = {
    note: {
      title: "",
      textBody: ""
    },
    updatingNote: false
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.noteToUpdate) {
      this.setState({ updatingNote: true, note: this.props.noteToUpdate });
    }
  }

  handleChange = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddNote = event => {
    event.preventDefault();
    console.log("handle add new note");
    this.props.addNewNote(this.state.note);
    this.props.history.push("/notes");
  };

  handleUpdateNote = () => {
    this.props.updateNote(this.state.note);
    this.props.history.push("/notes");
  };

  render() {
    return (
      <CreateEditNote
        {...this.props}
        note={this.state.note}
        handleAddNote={this.handleAddNote}
        handleChange={this.handleChange}
        handleUpdateNote={this.handleUpdateNote}
        updatingNote={this.state.updatingNote}
      />
    );
  }
}

const mapStateToProps = state => ({
  noteToUpdate: state.noteToUpdate
});

export default connect(
  mapStateToProps,
  { addNewNote, updateNote }
)(CreateEditNoteView);
