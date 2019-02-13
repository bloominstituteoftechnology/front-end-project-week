import React, { Component } from 'react';
import NoteContainer from './Containers/NoteContainer';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  height:100vh;
`
class App extends Component {
  render() {
    return (
      <AppContainer>
        <NoteContainer/>
      </AppContainer>
    );
  }
}

export default App;
