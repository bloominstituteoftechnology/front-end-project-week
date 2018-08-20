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
      notes: []
    }
  }

  componentDidMount () {
     this.setState({ notes: this.props.notes });
  }

  render () {
    const { viewList, viewNote, addNote, editNote, deleteNote, isView, isEditted, isDeleted, isAdded } = this.props;
    return (
      <Container>
        <NoteNavigation 
          viewList={viewList} 
          addNote={addNote}
        />
        <Note 
          notes={this.state.notes}
          viewNote={viewNote}
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