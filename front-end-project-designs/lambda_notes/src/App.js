import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import TodoList from './components/TodoList/TodoList';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`



class App extends Component {
  render() {
    return (
      <AppContainer>
        <Sidebar />
        <TodoList />
      </AppContainer>
    );
  }
}

export default App;
