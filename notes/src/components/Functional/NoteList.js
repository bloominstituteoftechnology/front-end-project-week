import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getData } from '../../Store/actions';
import Note from '../Views/Note';

import { NotesContainer, NoteAlignment } from '../style/styleNote';

class NoteList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <NotesContainer>
        <h2>Notes:</h2>
        <NoteAlignment>
          {this.props.notes.map(note => (
            <Link to={`note._id}`} key={note._id}>
              <Note note={note} />
            </Link>
          ))}
        </NoteAlignment>
      </NotesContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(NoteList);
