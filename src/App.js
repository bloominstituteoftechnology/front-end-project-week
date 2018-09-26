import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';

const Application = styled.div`

  max-width: 1024px;
  width: 100%;
  margin: 0 auto; 

`

const URL = 'http://localhost:9000/notes/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      searchedNotes: [],
      search: ''
    }
  }



  componentDidMount () {
    axios.get(URL)
    .then(response => {
        this.setState({
            notes: response.data,
            searchedNotes: response.data
        })
    })
    .catch(error => {
      console.log(error);
    });
}

handleSearch = (event) => {
  this.setState ({
    search: event.target.value,
    notes: this.state.searchedNotes.filter((note) => 
      new RegExp(event.target.value, "i").exec(note.title))
  });
}

  render() {
    return (
      <Application>
        
        <Navigation {...this.props} notes={this.state.notes}/>
        <Route path='/add-note' component={NewNote} />
        <Route exact path='/notes' render={(props) => (
          <NotesList {...props} notes={this.state.notes} 
          search={this.state.search} handleSearch={this.handleSearch}/>)} />
        <Route path='/edit-note/:id' render={(props) => (
          <EditNote {...props} note={this.state.note} />)} />
        <Route path='/note/:id' render={(props) => (
          <NoteView {...props}  note={this.state.note} />) } />
          
      </Application>
    );
  }
}

export default App;
