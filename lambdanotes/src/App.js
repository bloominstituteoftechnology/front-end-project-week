import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { notesData } from './notesData.js';
import Sidebar from './components/Sidebar.js';
import Notes from './components/Notes.js';

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
`;

const Main = styled.div`
  display: flex;
  width: 99.5%;
  margin-top: 13px;
  border: 1px solid;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesData : []
    };
  }
  
  componentDidMount() {
    this.setState({ notesData: notesData});
  }

  render() {
    return (
      <Wrapper>
        <Heading>List View</Heading>
        <Rule />
        <Main>
            <Sidebar />
            <Route exact path="/" render={() => <Notes notes={this.state.notesData} />} />
        </Main>
      </Wrapper>
    );
  }
}

export default App;
