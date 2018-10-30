import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

import { NotesContainer, NotesWrapper, NoteCard } from './Styles';

class NotesList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <NotesContainer>
        <h2>Your Notes:</h2>

        <NotesWrapper>
          {this.props.notes.map(note => (
            <NoteCard key={note._id}>
              <Link to={`/notes/${note._id}`} >
                <h2>{note.title}</h2>
              </Link>
              <hr />
              <p>{note.textBody}</p>
            </NoteCard>
          ))}
        </NotesWrapper>

      </NotesContainer>
    );
  }

}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes })(NotesList);
