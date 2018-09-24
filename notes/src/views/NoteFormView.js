import React, { Component } from 'react';
import styled from 'styled-components';

import NoteForm from '../components/NoteForm';

class AddNoteView extends Component {
  render() {
    return (
      <Container>
        <NoteForm />
      </Container>
    );
  }
}

export default AddNoteView;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
