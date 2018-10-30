import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getData } from '../../store/actions';
import Note from '../presentational/Note';

import { NotesContainer, NoteAlign } from '../style/noteStyle';

class NoteList extends React.Component {
  componentDidMount() {
    console.log('data');
    this.props.getData();
  }

  render() {
    return (
      <NotesContainer>
        <h2>Your Notes:</h2>
        <NoteAlign>
          {this.props.notes ? (
            this.props.notes.map(note => (
              <Link to={`/notes/${note._id}`} key={note._id}>
                <Note note={note} />
              </Link>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </NoteAlign>
      </NotesContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(NoteList);
