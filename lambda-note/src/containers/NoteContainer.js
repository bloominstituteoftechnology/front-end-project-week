import React, { Component } from 'react';
import styled from 'styled-components';
import Note from '../components/Note';
import NoteNavigation from '../components/NoteNavigation';

const Container = styled.div`
  display: flex;
  max-width: 1080px;
`;

class NoteContainer extends Component {
  constructor () {
    super();
    this.state = {
    }
  }

  componentDidMount () {
    this.props.fetchNote();
  }

  render () {
    const { fetchNote, viewNote, viewAddNote, viewEditNote, viewDeleteNote, addNote, editNote, deleteNote, searchNote, noSearch, isFetched, isView, isEditted, isDeleted, isAdded, isSearched} = this.props;
    const { selectedNote, notes, filteredNotes, alert } = this.props;
    return (
      <Container>
        <NoteNavigation         
          fetchNote={fetchNote} 
          viewAddNote={viewAddNote}
        />
        <Note  
          notes={notes}
          filteredNotes={filteredNotes}
          alert={alert}
          selectedNote={selectedNote}
          fetchNote={fetchNote}
          viewNote={viewNote}
          viewEditNote={viewEditNote}
          viewDeleteNote={viewDeleteNote}
          addNote={addNote}
          editNote={editNote}
          deleteNote={deleteNote}
          searchNote={searchNote}
          noSearch={noSearch}
          isFetched={isFetched}
          isView={isView}
          isAdded={isAdded}
          isEditted={isEditted}
          isDeleted={isDeleted}
          isSearched={isSearched}
        />
      </Container>
    )
  }
}

export default NoteContainer;