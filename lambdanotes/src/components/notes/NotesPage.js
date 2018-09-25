import React, { Component } from 'react';
import NoteList from './NoteList';
import { fetchNotes } from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const NotesPagerapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #c8c7c8;
  font-size: 20px;
  background: #f2f1f2;
  justify-content: space-around;
`;

class NotesPage extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    // console.log(this.props.notes);
    return (
      <NotesPagerapper>
        {this.props.notes.map(note => {
          return (
            <NoteList
              tags={note.tags}
              title={note.title}
              textBody={note.textBody}
              key={note._id}
              id={note._id}
            />
          );
        })}
      </NotesPagerapper>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesPage);
