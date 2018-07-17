import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import LambdaNav from './containers/LambdaNav';

const MainContainer = styled.div`
  display: flex;
  width: 900px; 
  margin: 0 auto;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
    <MainContainer>
      <LambdaNav />
      </MainContainer>
    );
  }
}

export default App;
