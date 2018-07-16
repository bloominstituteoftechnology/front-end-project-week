import React, { Component } from 'react';
import NoteList from './components/NoteList';
import NavBar from './components/NavBar';
import styled from 'styled-components';
  
const APP = styled.div`
  display: flex;
  width: 888px;
  margin: auto;
  border: 1px solid #a6a6a6;
`

class App extends Component {
  render() {
    return (
      <APP className="App">
        <NavBar />
        <NoteList />
      </APP>
    );
  }
}

export default App;
