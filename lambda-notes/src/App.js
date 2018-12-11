import React, { Component } from 'react';
import List from './components/List';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import SingleNote from './components/SingleNote';
import AddNote from './components/AddNote';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100%;
`

const Sidebar = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 20px;  
  background-color: #D8D8D8;
  color: #4A4A4A;
  border-right: 1px solid darkgrey;
`

const SbButton = styled.button`
  width: 99%;
  height: 50px;
  background-color: #2BC1C4;
  border: 1px solid darkgrey;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  margin: 10px auto;

  a {
    color: white;
    text-decoration: none;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Sidebar>
          <h1>Lambda<br/>Notes</h1>
          <SbButton><Link to={`/`}><h2>View Your Notes</h2></Link></SbButton>
          <SbButton><Link to={`/AddNote/new`}><h2>+ Create New Note</h2></Link></SbButton>
        </Sidebar>
        <Route exact path="/" component={List} />
        <Route exact path="/AddNote/new" component={AddNote} />
        <Route exact path="/:_id" component={SingleNote} />
      </AppWrapper>
    );
  }
}

export default App;
