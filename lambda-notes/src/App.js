import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import MyNotes from './components/myNotes';
import NoteForm from './components/noteForm';
import ViewNote from './components/viewNote';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <nav className='main-nav'>
          <h1>Lambda Notes</h1>
          <NavLink exact to='/myNotes'>View Your Notes</NavLink>
          <NavLink to='/createNote'>+ Create New Note</NavLink>
        </nav>

        <div className='main-page'>
          <Route exact path='/myNotes' component={MyNotes}/>
          <Route path='/createNote' component={NoteForm} />
          <Route path='/myNotes/:id' component={ViewNote} />
        </div>

      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;

  nav {
    width: 250px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: lightgray;
    padding: 20px;
    box-sizing: border-box;
    font-size: 25px;
    line-height: 30px;
    border-right: 2px solid darkgray;

    h1 {
      margin: 0 0 20px;
      color: #454544;
    }

    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      padding: 7px;
      background: #29B7BC;
      color: white;
      margin: 10px 0;
      width: 90%;
      border: 1px solid teal;

      &:visited {
        color: white;
      }
      &:hover {
        background: white;
        color: #29B7BC;
      }
      &.active {
        border: 2px solid white;
      }
    }

  }
  .main-page {
      padding: 20px;
      color: #454544;
      width: 100%;
    }
`

export default App;
