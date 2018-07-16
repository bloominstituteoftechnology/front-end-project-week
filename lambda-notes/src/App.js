import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import MainPane from './components/MainPane';

import './App.css';

let StyledApp = styled.div`
  display: flex;
  font-family: ${ props => props.theme.font.body };

  * {
    box-sizing: border-box;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <SideBar />
        <MainPane />
      </StyledApp>
    );
  }
}

export default App;
