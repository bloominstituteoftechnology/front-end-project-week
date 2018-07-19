import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { getNoteById } from '../reducers/index';
import { fetchNoteById, sendEdit } from '../actions/index';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.sendEdit = this.sendEdit.bind(this);
  }

  sendEdit(note) {
    const { id } = this.props.match.params;
    // move function is passed as callback to Action Creator to provide
    // cause navigation to NoteGrid on success
    const move = () => {
      this.props.history.push(`/view/${id}`);
    };
    this.props.sendEdit(id, note, move);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchNoteById(id);
  }

  render() {
    const { note } = this.props;
    return (
      <NoteForm
        note={note}
        titleText="Edit Note:"
        buttonText="Update"
        handleFormSubmit={this.sendEdit}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    ...ownProps,
    note: getNoteById(state, id)
  };
};
export default connect(
  mapStateToProps,
  { fetchNoteById, sendEdit }
)(EditNote);
