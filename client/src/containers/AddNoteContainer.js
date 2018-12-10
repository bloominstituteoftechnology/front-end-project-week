import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SecondaryHeading } from '../styles';
import NotesForm from '../components/NotesForm';
import { addNote, clearError } from '../actions';

class AddNoteContaier extends Component {
  onFormSubmit = data => {
    this.props.addNote(data, () => this.props.history.push('/notes'));
    this.setState({
      requested: true,
    });
  };

  render() {
    const { isAdding, error } = this.props;

    if (isAdding) {
      return <div>Adding note...</div>;
    }

    if (error) {
      return (
        <div>
          Something went wrong, please try again {error.message}{' '}
          <button onClick={this.props.clearError}>OK</button>
        </div>
      );
    }

    return (
      <div>
        <SecondaryHeading>Create a New Note</SecondaryHeading>
        <NotesForm onFormSubmit={this.onFormSubmit} buttonText="Save" />
      </div>
    );
  }
}

export default connect(
  ({ isAdding, error }) => ({ isAdding, error }),
  { addNote, clearError },
)(AddNoteContaier);
