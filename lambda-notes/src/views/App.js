import React, { Component } from 'react';
import './App.css';
import SideBarView from './SideBarView';
import ListView from './ListView';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: #d7d7d7;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  max-width: 2000px;
  border: 1px solid gray;
  margin: 0 auto;
  font-size: 62.5%;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer>
          <SideBarView />
          <ListView />
        </AppContainer>
      </div>
    );
  }
}

export default App;
