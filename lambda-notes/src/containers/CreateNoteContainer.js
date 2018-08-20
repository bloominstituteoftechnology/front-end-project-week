import React from "react";
import NoteForm from "../components/NoteForm";
import { connect } from "react-redux";
import { addNote } from "../actions";
import { StyledContainer } from '../styled-components/container-styles'

class CreateNoteContainer extends React.Component {
  state = {
    title: "",
    textBody: "",
  };

  componentDidUpdate() {
    if (this.props.updated) { 
      this.props.history.push('/')
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value.trim });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <StyledContainer>
      <h4>Create New Note:</h4>
        <NoteForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          content={this.state.textBody}
        />
        {this.props.addingNote && <p>addin ur note...</p>}
        {this.props.updated && <p>Note added!</p>}
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  updated: state.notesReducer.noteAddSuccess,
  addingNote: state.notesReducer.addingNote
})

export default connect(
  mapStateToProps,
  { addNote }
)(CreateNoteContainer);
