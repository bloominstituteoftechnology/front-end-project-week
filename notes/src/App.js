import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import NotesListView from './views/NotesListView';
import NotesFormView from './views/NotesFormView';
import SingleNote from './views/SingleNote';
import styled from 'styled-components';

const Nav = styled.div`
  
  height: 900px;
  margin-top: 0;
  padding: 3%;
  background-color: lightgray;
  box-shadow: 5px 5px 10px lightslategray;
  

  li{
    list-style-type: none;
  height: 50px;
  width: 200px;
  border: none;
  background-color: lightseagreen;
  margin: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  text-align: center;

  &:hover{
    background-color: turquoise;
    box-shadow: 5px 5px 5px darkgray;
  }
  }
  a{
    text-decoration: none;
     color: white;
     &:hover{
      text-decoration: none;
      color: white;
     }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <h1>Lambda Notes</h1>
          <li>
            <NavLink exact to='/notes'>
              View Your Notes
            </NavLink>
          </li>
          <li>
            <NavLink to='/notes-form'>
                + Create New Note
            </NavLink>
          </li>
        </Nav>
        <Route exact path='/notes' component={NotesListView} />
        <Route path= '/notes-form' component={NotesFormView} />
        <Route path='/notes/:noteId' component={SingleNote} />
      </div>
    );
  }
}

export default withRouter(App);
