import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SecondaryHeading } from '../styles';
import NotesForm from '../components/NotesForm';
import { editNote } from '../actions';

class EditNoteContainer extends Component {
  state = {
    requested: false,
  };

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
            title: currentNote.title,
            textBody: currentNote.textBody,
          }}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

export default connect(
  ({ isEditing, error, currentNote }) => ({ isEditing, error, currentNote }),
  { editNote },
)(EditNoteContainer);
