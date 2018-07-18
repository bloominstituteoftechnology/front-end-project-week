import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExample from './components/SideBar';
import NoteForm from './components/NoteForm';
import ListView from './components/ListView';
import OneNote from './components/OneNote';
import CreateNoteView from './components/CreateNoteView';
import EditView from './components/EditView';
import Delete from './components/DeleteView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Appcont = styled.div`

    margin: 0 auto;
    width: 880px;
`;

class App extends Component {
  render() {
    return (
      <Appcont className="App">
       
        <Route exact path='/' component={ListView}/>
        <Route exact path='/createnote' component={CreateNoteView}/>
        <Route path='/note' component={OneNote}/>
        <Route path='/edit' component={EditView}/>
        <Route path='/delete' component={Delete}/>
      </Appcont>
    );
  }
}

export default App;
