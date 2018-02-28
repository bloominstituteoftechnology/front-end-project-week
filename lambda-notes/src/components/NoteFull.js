import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote } from '../actions/actions';

class NoteFull extends Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        {this.props.filteredNotes.map(note => {
          return (
            <div key={note.id} className="row full-note">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filteredNotes: state.notes.filter(
      note => note.id === Number(state.currentNote)
    ),
    error: state.error,
    currentNote: state.currentNote,
  };
};

export default connect(mapStateToProps, { getNote })(NoteFull);
