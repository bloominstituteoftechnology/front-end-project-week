import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SecondaryHeading } from '../styles';
import NotesForm from '../components/NotesForm';
import { editNote, fetchOne } from '../actions';

class EditNoteContainer extends Component {
  state = {
    requested: false,
  };

  componentDidMount() {
    this.props.fetchOne(this.props.match.params.id);
  }

  onFormSubmit = data => {
    this.props.editNote(this.props.match.params.id, data);
    this.setState({
      requested: true,
    });
  };

  render() {
    const { isEditing, error, currentNote } = this.props;

    if (isEditing) {
      return <div>Editing Note ...</div>;
    }

    if (error) {
      return <div>Something went wrong, please try again {error.message}</div>;
    }

    if (this.state.requested) {
      this.props.history.push('/');
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
  { editNote, fetchOne },
)(EditNoteContainer);
