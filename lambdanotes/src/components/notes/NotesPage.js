import React, { Component } from 'react';
import NoteList from './NoteList';
import { fetchNotes } from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

class NotesPage extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <NotesPageWrapper>
        {this.props.fetching ? (
          <p>Reticulating Splines...</p>
        ) : (
          <React.Fragment>
            <NoteHeaderWrapper>Your Notes:</NoteHeaderWrapper>
            <NotesWrapper>
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
            </NotesWrapper>
          </React.Fragment>
        )}
        {this.props.error ? <p>{this.props.error}</p> : null}
      </NotesPageWrapper>
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

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 20px;
`;
const NotesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f1f2;
`;
const NoteHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  padding: 70px 0px 35px 35px;
`;
