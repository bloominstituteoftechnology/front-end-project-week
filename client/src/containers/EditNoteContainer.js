import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SecondaryHeading } from '../styles';
import NotesForm from '../components/NotesForm';
import { editNote, fetchOne, clearError } from '../actions';

class EditNoteContainer extends Component {
  componentDidMount() {
    this.props.fetchOne(this.props.match.params.id);
  }

  onFormSubmit = data => {
    this.props.editNote(this.props.match.params.id, data, () =>
      this.props.history.push('/notes'),
    );
  };

  render() {
    const { isEditing, error, currentNote } = this.props;

    if (isEditing) {
      return <div>Editing Note ...</div>;
    }

    if (error) {
      return (
        <div>
          Something went wrong, please try again {error.message || error}{' '}
          <button onClick={this.props.clearError}>OK</button>
        </div>
      );
    }

    return (
      <div>
        <SecondaryHeading>Edit Note</SecondaryHeading>
        <NotesForm
          preloadedState={{
            ...currentNote,
          }}
          onFormSubmit={this.onFormSubmit}
          buttonText="Update"
        />
      </div>
    );
  }
}

export default connect(
  (
    { isEditing, error, notes, currentNote },
    {
      match: {
        params: { id },
      },
    },
  ) => ({
    isEditing,
    error,
    currentNote,
    notes,
  }),
  { editNote, fetchOne, clearError },
)(EditNoteContainer);
