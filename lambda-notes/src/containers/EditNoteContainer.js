import React from "react";
import NoteForm from "../components/NoteForm";
import findNote from "../selectors";
import { connect } from "react-redux";
import { getNote } from "../actions";

class EditNoteContainer extends React.Component {
  state = {
    title: "",
    textBody: "",
  };

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Edit Note:</h1>
        <NoteForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          content={this.state.textBody}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: findNote(state.notesReducer.notes, ownProps.match.params.id),
  isFetching: state.notesReducer.fetchingNote,
});

export default connect(
  mapStateToProps,
  { getNote }
)(EditNoteContainer);


