import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="Notes-Container">
        <div className="Notes-List">
          {this.props.notes.map(note => {
            return (
              <div key={note.id}>
                {note.title}
                {note.textBody}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    getNotes
  }
)(NoteList);
