import React, { Component } from 'react';
import axios from 'axios';
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

const URL = 'http://localhost:5000/notes/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    axios.get(URL)
    .then(response => {
        this.setState({
            notes: response.data
        })
    })
    .catch(error => {
      console.log(error);
    })
}

  render() {
    return (
      <Application>
        <SideNav />
        <Route path='/add-note' component={NewNote} />
        <Route exact path='/notes' render={(props) => (
          <NotesList {...props} notes={this.state.notes} />)} />
        <Route path='/notes/:id' render={(props) => (
          <EditNote {...props} notes={this.state.notes} />)} />
        <Route path='/note/:id' render={(props) => (
          <NoteView {...props}  notes={this.state.notes} />) } />
      </Application>
    );
  }
}

export default App;
