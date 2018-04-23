import React, { Component } from 'react';
import styled from 'styled-components';

// import './App.css';
import NoteList from './components/NoteList';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 893px;
  max-width: 100%;
`

const Heading = styled.h1`
  color: #000;
  font-size: 2.2em;
  margin-top: 9px;
  line-height: 1.1;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Rule = styled.hr`
  margin-top: 0;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>List View</Heading>
        <Rule />
        <NoteList />
      </Wrapper>
    );
  }
}

export default App;
