// React imports
import React, { Component } from 'react';
// CSS imports
import '../views/NoteFormView.css';
// Component imports
import EditNoteForm from '../components/EditNoteForm';
// Actions imports
import { editNote, fetchSingleNote } from '../actions';
// Redux imports
import { connect } from 'react-redux';

class EditNoteFormView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleNote(id);
  }
  render() {
    return (
      <div className="noteFormView">
        <EditNoteForm editNote={this.props.editNote} notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return {
    notes
  };
};

export default connect(
  mapStateToProps,
  { editNote, fetchSingleNote }
)(EditNoteFormView);
