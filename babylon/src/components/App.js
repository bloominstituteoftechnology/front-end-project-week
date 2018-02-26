import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './home';

const StyledApp = styled.div`
  width: 830px;
  margin: 20px auto 0;
  border: 1px solid #bfbfc0;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Home />
      </StyledApp>
    );
  }
}

export default App;
