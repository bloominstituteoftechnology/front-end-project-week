import React, { Component } from 'react';
import styled from 'styled-components';
import Note from '../components/Note';
import NoteNavigation from '../components/NoteNavigation';
import { dummyNote } from '../dummy';

const Container = styled.div`
  display: flex;
  max-width: 1080px;
`;

class NoteContainer extends Component {
  constructor () {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    this.setState({ notes: dummyNote });
    // this.setState({ notes: this.props.notes });
  }

  render () {
    const { viewNote, addNote, editNote, deleteNote, isView, isEditted, isDeleted, isAdded } = this.props;
    return (
      <Container>
        <NoteNavigation 
          viewNote={viewNote} 
          addNote={addNote}
        />
        <Note 
          notes={this.state.notes}
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