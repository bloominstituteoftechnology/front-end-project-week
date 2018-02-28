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
        <p className="text-right">
          <span>edit</span> <span>delete</span>
        </p>
        {this.props.filteredNotes.map(note => {
          return (
            <div key={note.id} className="full-note">
              <h3>{note.title}</h3>
                <p className="note-body">{note.body}</p>
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
