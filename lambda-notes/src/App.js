import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const MainContainer = styled.div`
  border: 1px solid red;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <MainContainer>Hello</MainContainer>
    );
  }
}

export default App;
