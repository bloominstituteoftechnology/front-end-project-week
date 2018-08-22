import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SecondaryHeading } from '../styles';
import NotesForm from '../components/NotesForm';
import { addNote } from '../actions';

class AddNoteContaier extends Component {
  state = {
    requested: false,
  };

  onFormSubmit = data => {
    this.props.addNote(data);
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
      return <div>Something went wrong, please try again {error.message}</div>;
    }

    if (this.state.requested) {
      this.props.history.push('/');
    }

    return (
      <div>
        <SecondaryHeading>Create a New Note</SecondaryHeading>
        <NotesForm onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default connect(
  ({ isAdding, error }) => ({ isAdding, error }),
  { addNote },
)(AddNoteContaier);
