import React from "react";
import { connect } from "react-redux";
import { addNewNote, updateNote } from "../store/actions";
import NoteForm from "../components/Note";

const blankFormValues = {
  title: "",
  body: ""
};

class NotesFormView extends React.Component {
  state = {
    note: {
      title: "",
      body: ""
    },
    isUpdating: false
  };

  componentDidMount() {
    if (this.noteToUpdate) {
      this.setState({ isUpdating: true, note: this.props.noteToUpdate });
    }
  }

  handleChange = event => {
    this.setState({
      avenger: {
        ...this.state.avenger,
        [event.target.name]: event.target.value
      }
    });
  };

  handleUpdateNote = () => {
    this.props.updateNote(this.state.note);
    this.props.history.push("/notes");
  };

  render() {
    return (
      <NoteForm
        {...this.Note}
        note={this.state.note}
        handleAddNewANote={this.handleAddNewANote}
        handleChange={this.handleChange}
        handleUpdateANote={this.handleUpdateANote}
        isUpdating={this.state.isUpdating}
      /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
    );
  }
}

const mapStateToProps = state => ({
  noteToUpdate: state.noteToUpdate
});

export default connect(
  mapStateToProps,
  { addNewNote, updateNote }
)(NotesFormView);
