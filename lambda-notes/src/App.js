import React, { Component } from 'react';
import NoteContainer from './Containers/NoteContainer';
import CreateNew from './Views/CreateNew';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  height:100vh;
`
class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }



  render() {
    return (
      <AppContainer>
        <Route exact path="/" component={NoteContainer}/>
        <Route path='/create-new' component={CreateNew} />
      </AppContainer>
    );
  }
}

export default App;
