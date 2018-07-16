import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

class App extends Component { 
  constructor(){
    super();
    this.state = {
      notes: [],

    }
  }
  render() {
    return (
      <StyledApp>
        <Route path='/' component={NavBar} />
      </StyledApp>
    );
  }
}

export default App;
