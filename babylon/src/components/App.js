import React, { Component } from 'react';
import styled from 'styled-components';
import List from './list';
import NewNote from './newnote';
import FullNote from './fullnote';

const StyledApp = styled.div`
  width: 830px;
  margin: 20px auto 20px;
  border: 1px solid #bfbfc0;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <List />
        <NewNote />
        <FullNote />
      </StyledApp>
    );
  }
}

export default App;
