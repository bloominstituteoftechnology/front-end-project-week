import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import SideNav from './components/SideNav';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';



const Application = styled.div`

  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;

  border: 1px solid red;


`


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }


  render() {
    return (
      <Application>
        <Route path='/' component= {SideNav} />
        <Route path='/add-note' component={NewNote} />
        <Route path='/edit-note' component={EditNote} />
        <Route path='/notes' render={(props) => (
          <NotesList {...props} notes={this.state.notes} />)} />
        <Route path='/note/:id' render={(props) => (
          <NoteView {...props}  notes={this.state.notes} />) } />
      </Application>
    );
  }
}

export default App;
