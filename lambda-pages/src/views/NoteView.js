import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote } from '../actions';
import Note from '../components/Note';
import NoteNav from '../components/NoteNav';

class NoteView extends Component {
  state = {
    id: this.props.match.params.id
  };

  componentDidMount() {
    const { id } = this.state;
    this.props.getNote(id);
    console.log(id);
  }

  render() {
    const { isFetchingNote } = this.props;
    return (
      <div className="View">
        {/* {error && <div>{error}</div>} */}
        {isFetchingNote ? (
          <div>Loading note...</div>
        ) : (
          <>
            <NoteNav id={this.props.note._id} />
            <h2>{this.props.note.title} </h2>
            <Note note={this.props.note} />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.notes.note,
    isFetchingNote: state.notes.isFetchingNote,
    error: state.notes.error
  };
};

export default connect(
  mapStateToProps,
  { getNote }
)(NoteView);
