import React, { Component } from 'react';

import { Container, Wrapper } from './Styles'

class NotesContainer extends Component {
  state = {
    notes: []
  }

  render() {
    return (
      <Container>
        <Wrapper>
          List View
        </Wrapper>
      </Container>
    );
  }
}

export default NotesContainer;
