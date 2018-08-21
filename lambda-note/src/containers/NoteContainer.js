import React, { Component } from 'react';
import styled from 'styled-components';
import Note from '../components/Note';
import NoteNavigation from '../components/NoteNavigation';

const Container = styled.div`
  display: flex;
  max-width: 1080px;
`;

class NoteContainer extends Component {

  render () {
    const { viewList, viewNote, viewAddNote, viewEditNote, viewDeleteNote, addNote, editNote, deleteNote, isView, isEditted, isDeleted, isAdded} = this.props;
    const { selectedNoteId, notes } = this.props;
    return (
      <Container>
        <NoteNavigation         
          viewList={viewList} 
          viewAddNote={viewAddNote}
        />
        <Note 
          notes={notes}
          selectedNoteId={selectedNoteId}
          viewList={viewList}
          viewNote={viewNote}
          viewEditNote={viewEditNote}
          viewDeleteNote={viewDeleteNote}
          addNote={addNote}
          editNote={editNote}
          deleteNote={deleteNote}
          isView={isView}
          isAdded={isAdded}
          isEditted={isEditted}
          isDeleted={isDeleted}
        />
      </Container>
    )
  }
}

export default NoteContainer;